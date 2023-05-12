import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";
    > main {
        grid-area: content;
        overflow-y: auto; //not working, check conflicts with name header
    }
    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;

export const Form = styled.form`
    max-width: 550px;
    margin: 38px auto;
    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 18px;
        a {
            font-size: 16px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }
`;