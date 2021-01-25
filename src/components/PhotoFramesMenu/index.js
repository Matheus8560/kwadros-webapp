import React from 'react';

import { ContainerNavFramer, NavFramerItem, ImgFramer, LabelFramer } from './styles';

const PhotoFramesMenu = () => (
    <ContainerNavFramer>
        <NavFramerItem type="success">
            <ImgFramer type="active" src="https://site-project.netlify.app/static/media/classic.9c363431.png"/>
            <LabelFramer type="active">Clássica</LabelFramer>
        </NavFramerItem>
        <NavFramerItem>
            <ImgFramer src="https://site-project.netlify.app/static/media/classic.9c363431.png"/>
            <LabelFramer>Clássica</LabelFramer>
        </NavFramerItem>
        <NavFramerItem>
            <ImgFramer src="https://site-project.netlify.app/static/media/classic.9c363431.png"/>
            <LabelFramer>Clássica</LabelFramer>
        </NavFramerItem>
        <NavFramerItem>
            <ImgFramer src="https://site-project.netlify.app/static/media/classic.9c363431.png"/>
            <LabelFramer>Clássica</LabelFramer>
        </NavFramerItem>
        
    </ContainerNavFramer>
)

export default PhotoFramesMenu;