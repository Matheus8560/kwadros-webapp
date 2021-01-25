import React from 'react';
import Dropzone from 'react-dropzone';

// import {IconCam} from 'react-icons/fi';

import { DropContainer, UploadMessage, UploadMessageContainer, IconCam} from './styles';

const Upload = ({ onUpload }) => {

    const renderDragMessage = ( isDragActive, isDragReject) => {
        if(!isDragActive)
            return (
                <UploadMessageContainer>
                    <IconCam />
                    <UploadMessage> Arraste os arquivos aqui (Mínimo 3 Fotos)</UploadMessage>
                </UploadMessageContainer>
            )
        

        if(isDragReject) 
            return (
                <UploadMessageContainer>
                    <IconCam type="error" />
                    <UploadMessage type="error">Arquivo não suportado</UploadMessage>
                </UploadMessageContainer>
            )
           
        return (
            <UploadMessageContainer>
                <IconCam type="success" />
                <UploadMessage type="success">Solte os arquivos arqui</UploadMessage>
            </UploadMessageContainer>
        )
    }

    return(
        <Dropzone accept="image/*" onDropAccepted={e => onUpload(e)}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <DropContainer 
                    {...getRootProps()} 
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}
                >
                    <input {...getInputProps()} />
                    { renderDragMessage(isDragActive, isDragReject) }
                </DropContainer>
            )}
        </Dropzone>
    );
}

export default Upload;