import React, { useState } from 'react';

import { ContainerNavFramer, NavFramerItem, ImgFramer, LabelFramer } from './styles';

import Grid from '@material-ui/core/Grid';

export default function PhotoFramesMenu() {
    
    const [selectedFrame, setSelectedFrame] = useState('classica');

    function handleFrame(frame) {
        setSelectedFrame(frame);
        
    }

    return(
        <ContainerNavFramer>
    
            <NavFramerItem type={selectedFrame === 'classica' ? "success" : ""} onClick={ e => handleFrame( "classica") }>
                <ImgFramer type={selectedFrame === 'classica' ? "active" : ""} src="https://site-project.netlify.app/static/media/classic.9c363431.png"/>
                <LabelFramer type={selectedFrame === 'classica' ? "active" : ""}>Clássica</LabelFramer>
            </NavFramerItem>

            <NavFramerItem type={selectedFrame === 'bold' ? "success" : ""} onClick={ e => handleFrame( "bold")}>
                <ImgFramer type={selectedFrame === 'bold' ? "active" : ""} src="https://site-project.netlify.app/static/media/classic.9c363431.png"/>
                <LabelFramer type={selectedFrame === 'bold' ? "active" : ""}>bold</LabelFramer>
            </NavFramerItem>
            
            <NavFramerItem type={selectedFrame === 'ever' ? "success" : ""} onClick={e => handleFrame( "ever")}>
                <ImgFramer type={selectedFrame === 'ever' ? "active" : ""} src="https://site-project.netlify.app/static/media/classic.9c363431.png"/>
                <LabelFramer type={selectedFrame === 'ever' ? "active" : ""}>ever</LabelFramer>
            </NavFramerItem>

            <NavFramerItem type={selectedFrame === 'clean' ? "success" : ""} onClick={e => handleFrame( "clean")}>
                <ImgFramer type={selectedFrame === 'clean' ? "active" : ""} src="https://site-project.netlify.app/static/media/classic.9c363431.png"/>
                <LabelFramer type={selectedFrame === 'clean' ? "active" : ""}>clean</LabelFramer>
            </NavFramerItem>
      
        </ContainerNavFramer>
    )

}

// const PhotoFramesMenu = () => (

//     <ContainerNavFramer>
    
//         <NavFramerItem type="success">
//             <ImgFramer type="active" src="https://site-project.netlify.app/static/media/classic.9c363431.png"/>
//             <LabelFramer type="active">Clássica</LabelFramer>
//         </NavFramerItem>

//         <NavFramerItem>
//             <ImgFramer src="https://site-project.netlify.app/static/media/classic.9c363431.png"/>
//             <LabelFramer>Clássica</LabelFramer>
//         </NavFramerItem>

//         <NavFramerItem>
//             <ImgFramer src="https://site-project.netlify.app/static/media/classic.9c363431.png"/>
//             <LabelFramer>Clássica</LabelFramer>
//         </NavFramerItem>

//         <NavFramerItem>
//             <ImgFramer src="https://site-project.netlify.app/static/media/classic.9c363431.png"/>
//             <LabelFramer>Clássica</LabelFramer>
//         </NavFramerItem>
        
//     </ContainerNavFramer>

// )

// export default PhotoFramesMenu;