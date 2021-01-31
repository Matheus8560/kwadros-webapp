import styled from 'styled-components';

export const Container = styled.div `
    height: 100%auto;
    width: 100%auto;
    background: #f5f3f3;

`;

export const Content = styled.div `
    height: 100%;
    width: 100%;
    padding: 110px 100px;

    @media(max-width: 800px) {
        padding: 40px 30px!important;
    }
`;

export const UserRegisterBtn = styled.button`
    cursor: pointer;
    padding: 10px;
    background: #3399ff;
    color: white;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    border: none;

    &:hover{
        background: #1a8cff
    }
`;

export const DialogContainer = styled.div`
    width: 500px;

    @media(max-width: 550px){
        width: 200px
    }
`;
