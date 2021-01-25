import styled, { css } from 'styled-components';

const borderActive = {
    default: '1px solid #e0d6d6',
    active: '2px solid #7159c1',
    success: '3px solid #78e5d4'
}

const heightActive = {
    default: '97px',
    active: '94px',
}


export const ContainerNavFramer = styled.aside `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* padding: 15px 0; */
    width: 25%;
    cursor: pointer;
    padding-right: 2%;
    /* &:hover {
        img {
            height: 100%;
        }
    } */
    
    /* border: 1px solid #7159c1; */
`;

export const NavFramerItem = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    /* border: 1px solid #e0d6d6; */
    /* padding: 2px 0; */
    border: ${props => borderActive[props.type || 'default']};
    border-radius: 10px;
    background: #FFF;
    /* background: #252323; */
`;

export const ImgFramer = styled.img `
    height: ${props => heightActive[props.type || 'default']};
    margin-right: 6%;
    border-top-left-radius: ${props => props.type === 'active' ? '10px' : '0'};
    border-bottom-left-radius: ${props => props.type === 'active' ? '10px' : 0 };
`;
export const LabelFramer = styled.label `
    font-size: 1rem;
    font-weight: 700;
    color:  ${props => props.type ? '#78e5d4' : '#252323'};
    
`;