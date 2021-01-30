import styled, { css } from 'styled-components';
import {AiOutlineCamera} from 'react-icons/ai';

const dragActive = css `
    border-color: #78e5d4;
`;

const dragReject = css `
    border-color: #e57878;
`;

export const DropContainer  = styled.div.attrs({ className: "dropzone" })`
    border: 1px dashed #ddd;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;
    transition: height 0.2s ease;

    ${ props => props.isDragActive && dragActive }
    ${ props => props.isDragReject && dragReject }

    /* @media(max-width: 800px){
        width: 200px;
        height: 200px;
        display: none;
    } */

`;

const messageColors = {
    default: '#999',
    error: '#e57878',
    success: '#78e5d4'
}

export const UploadMessage = styled.p `
    display: flex;
    color: ${props => messageColors[props.type || 'default']};
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;
    font-weight: 700;

    @media(max-width: 950px){
        
    }
`;

export const IconCam = styled(AiOutlineCamera) `
    color: ${props => messageColors[props.type || 'default']};
    font-size: 4rem;
`;

export const UploadMessageContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 0;

    @media(max-width: 950px){
        padding: 0;   
    }
`;