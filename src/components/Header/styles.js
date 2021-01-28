import styled from 'styled-components';

export const Container = styled.div `
    display: flex !important;
    background: #7159c1 !important;
    justify-content: space-between !important;
    align-items: center !important;
    padding: 40px 15px !important;
    width: 100% !important;
    height: 80px !important;
    position: fixed;
    top: 0;
    margin-bottom: 40px;
    border-bottom: 3px solid #7159c1;

    @media(max-width: 800px) {
        height: 60px !important;
        padding: 10px 15px !important;
        margin-bottom: 15px;
    }
`;

export const Img = styled.img `
    width: 15%;
    min-width: 140px;
`;

export const ArrowBtn = styled.button`
    background: none;
    border-radius: 50%;
    border: transparent;
    width: 40px;
    height: 40px;

    &:hover{
        cursor: pointer;
        background: #573ea8;
    }
`;