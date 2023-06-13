import styled from "styled-components";
import homeimg from "../../assets/kellySikkema-unsplash.jpg";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.ORANGE};
        margin-bottom: 16px;
    }
    > h2 {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 18px;
    }
    > p {
        font-size: 16px;
        margin-bottom: 48px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
    > a {
        text-decoration: none;
        margin-top: 124px;
        color: ${({theme}) => theme.COLORS.ORANGE};
`;

export const HomeImg = styled.div`
    flex: 1;
    background: url(${homeimg}) no-repeat center center;
    background: cover;
`;