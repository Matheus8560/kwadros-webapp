
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

export const MenuDrawer = styled.div`
    width: 440px;
    padding: 25px;
    background: #ffffff;
`;

export const OrderTitle = styled.div`
    font-size: 30px;
    font-weight: 700;
    margin: 20px 0;
`;

export const ButtonOrder = styled.button`
    color: #7159c1;
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    text-align: left center;
    display: flex;
    border: none; 
    background: #ffffff;
    margin: 30px 0 20px 0;

    &:hover {
        cursor: pointer;
    }
`;

export const SumaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`;

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
    font-weight: bold;
`;

export const Bottombutton = styled.div`
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    width: 100% !important;
    padding: 40px 0 !important;
`;