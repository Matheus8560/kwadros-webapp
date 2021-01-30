import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview, Frame, PreviewImg, Img, PreviewFrame } from './styles';

import bordaBold from '../../assets/borda-bold.svg'
import bordaClean from '../../assets/borda-clean.svg'

export default function FileList({ files, onDelete }){

    return (

        <Container data={files.length > 0 && files.map(index => (
            <div key={index.id}>
                <FileInfo>

                    <div>
                        <div style={{position: 'relative'}}>
                            <Preview>
                                <PreviewImg>
                                    <Img type={'active'} src={index.preview}/>
                                </PreviewImg>
                                <Frame>
                                    <img src={bordaBold}/>
                                </Frame>
                            </Preview>
                        </div>
                    </div>
                    
                    <div>
                        {index.progress !== 100 && !index.error && (
                            <CircularProgressbar
                                styles={{
                                    root: { width: 24 },
                                    path: { stroke: '#7159c1'}
                                }}

                                strokeWidth={10}
                                value={index.progress}
                            />
                        )}
                        {index.progress === 100 && (<MdCheckCircle size={24} color="#78e5d4" /> )}
                        {index.error && ( <MdError size={24} color="#e57878" /> )}
                    </div>
                    
                </FileInfo>
            </div>
        ))}/>
    )
}


