import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Container, FileInfo, Preview, Frame, PreviewImg, Img, PreviewFrame } from './styles';

import bordaBold from '../../assets/borda-bold.svg'
import bordaClean from '../../assets/borda-clean.svg'

export default function FileList({ files, onDelete, frame }){
    const cart = useSelector(state => state.cart.items);

    return (

        <Container data={files.length > 0 && files.map(index => (
            <div key={index.id}>
                <FileInfo>

                    <div>
                        <div style={{position: 'relative'}}>
                            <Preview>
                                <PreviewImg>
                                    <Img type={cart.name == 'Classic' || cart.name === 'Ever' ? 'active' : 'default'} src={index.preview}/>
                                </PreviewImg>
                                <Frame>
                                    <img src={cart.name == 'Classic' || cart.name === 'Bold' ? bordaBold : bordaClean}/>
                                </Frame>
                            </Preview>
                        </div>
                    </div>
                    
                    <div style={{width: '60%'}}>
                        <button  onClick={() => onDelete(index.id, cart.id)} style={{ width: '100%', border: 'none', color: '#FFF', padding: '8%', background: '#e57878', cursor: 'pointer' }} type="button">
                            Remover
                        </button>
                        {index.progress === 100 && (<MdCheckCircle size={24} color="#78e5d4" /> )}
                        {index.error && ( <MdError size={24} color="#e57878" /> )}
                    </div>
                    
                </FileInfo>
            </div>
        ))}/>
    )
}


