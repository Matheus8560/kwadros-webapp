
import styled from 'styled-components';

export const Container = styled.div `
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    padding: 40px 0 !important;
    width: 100% !important;
    height: 10px !important;
    background: #7159c1;
    position: absolute;
    bottom: 0;
`;

export const ButtonPrimary = styled.button `
    background: #59c179;
    width: 30%;
    height: 45px;
    border: none;
    border-radius: 5px;
    color: #FFF;
    font-size: 1rem;
    font-weight: 700;

    &:hover {
        cursor: pointer;
        background: #39f974;

    }
`;