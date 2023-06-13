const {hash, compare} = require("bcryptjs");
const AppError = require("../utils/appError");
const sqliteConnection = require("../database/sqlite");

class usersController {
    async create(request, response) {
        const { name, email, password } = request.body
        const database = await sqliteConnection()
        const checkIfUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])
        
        if(checkIfUserExists) {
            throw new AppError("This email is already being used")
        }

        const hashPass = await hash(password, 8)

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashPass])

        return response.status(201).json()
    }

    async update(request, response) {
        const {name, email, password, old_password} = request.body
        const user_id = request.user.id;
        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id])
        
        if(!user) {
            throw new AppError("User not found")
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("Email already being used")
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if(password && !old_password){
            throw new AppError("Type in your current password before adding a new one")
        }

        if(password && old_password) {
            const checkOldPassword = await compare(old_password, user.password)

            if(!checkOldPassword) {
                throw new AppError("Your current password is incorrect")
            }

            user.password = await hash(password, 8)
        }

        await database.run(`
            UPDATE users SET
            name = ?,
            email = ?,
            password = ?,
            updated_at = DATETIME('now')
            WHERE id = ?`,
            [user.name, user.email, user.password, user_id]
        )

        return response.status(200).json();
    }
}

module.exports = usersController;