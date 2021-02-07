import styled from 'styled-components';

export const Container = styled.div `
    height: 100vh;
    width: 100%;
    background: #f5f3f3;

`;

export const Content = styled.div `
    /* height: 100%; */
    padding: 20px 5% !important;
    width: 100%;
    padding: 110px 100px;

    @media(max-width: 800px) {
        padding: 40px 30px!important;
    }
`;
