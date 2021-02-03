import styled from 'styled-components';

const itemActive = {
    default: 'white',
    active: '#59C179',
}

const itemActiveDrawer = {
    default: 'black',
    active: '#59C179',
}

const borderActive = {
    default: 'none',
    active: '1px solid #59C179',
}

export const Container = styled.div `
    display: flex !important;
    background: #7159c1 !important;
    justify-content: space-between !important;
    align-items: center !important;
    padding: 25px 100px !important;
    width: 100% !important;
    height: 80px !important;
    position: relative;
    border-bottom: 3px solid #7159c1;

    @media(max-width: 800px) {
        height: 60px !important;
        padding: 15px 25px!important;
        margin-bottom: 0px;
        /* position: relative; */
    }
`;

export const Img = styled.img `
    width: 15%;
    min-width: 110px;
`;

export const TopMenu = styled.div`
    width: 11rem;
    display: flex !important;
    justify-content: space-between;
    @media(max-width: 580px){
        justify-content: flex-end !important;
    }
`;

export const MenuItens = styled.div`
    cursor: pointer;
    color: ${props => itemActive[props.type || 'default']};
    border-bottom: ${props => borderActive[props.type || 'default']};
    font-size: 15px;
    font-weight:bold;
    
    @media(max-width: 580px){
        display: none;
    }
`;

export const MenuDrawerBtn = styled.button`
    cursor: pointer;
    border: none;
    padding: 1.5rem 5rem;
    background: #FFFFFF;
`;

export const MenuMobileItens = styled.p`
    color: ${props => itemActiveDrawer[props.type || 'default']};
    border-bottom: ${props => borderActive[props.type || 'default']};
    font-size: 18px;
    font-weight:bold;
`;

export const MenuMobile = styled.button`
    display: none;    

    @media(max-width: 580px){
        display: inline;
        padding: 5px;
        background: none;
        border-radius: 50%;
        border: none;
    }
`;