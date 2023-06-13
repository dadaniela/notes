import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    height: 105px;
    width: 100%;
    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    display: flex;
    justify-content: space-between;
    padding: 0 80 px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    > img {
        margin-left: 20px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
    };
    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;
        span {
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        };
        strong {
            font-size: 16px;
            color: ${({theme}) => theme.COLORS.WHITE};
        };
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;
    > svg {
        color: ${({theme}) => theme.COLORS.ORANGE};
        font-size: 30px;
        margin-right: 20px;
    }
`;