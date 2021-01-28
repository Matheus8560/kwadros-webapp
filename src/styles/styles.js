import styled from 'styled-components';

export const Container = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%auto;
    background: #f5f3f3;
`;

export const Content = styled.div `
    width: 100%;
    /* max-width: 400px; */
    margin: 30px;
    /* background: #FFFFFF; */
    padding: 20px 0;
    border-radius: 4px;
    display: flex;
    background: #f5f3f3;

    @media(max-width: 950px) {
        flex-direction: column;
        margin: 0;
    }

    @media(max-height: 550px) {
        margin-top: 20px;
    }
/* 
     @media(max-height: 740px) {
        margin: 190px 0;
    } */
`;

export const ContentDropzone = styled.div `
    width: 80%;
    /* max-width: 400px; */
    /* margin: 30px; */
    background: #f5f3f3;
    padding: 40px 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    height: 100%;

    @media(max-width: 950px) {
        width: 100%;
        padding: 0 20px;
    }
`;
