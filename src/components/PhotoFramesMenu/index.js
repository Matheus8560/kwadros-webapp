import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addProductToCartRequest } from '../../store/modules/cart/actions';

import { ContainerNavFramer, NavFramerItem, ImgFramer, LabelFramer } from './styles';;

export default function PhotoFramesMenu({ frames }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);
    const [selectedFrame, setSelectedFrame] = useState('Moldura Classic');

    const handleFrame = (frame) =>  {
        setSelectedFrame(frame);

        const frameFilter = frames.find(index => index.name.includes(frame));
        const objFrameFilter = { ...frameFilter, quantity: cart.quantity}
        dispatch(addProductToCartRequest(objFrameFilter))
    
    }

    return(
        <ContainerNavFramer>
            {frames.length > 0 && frames.map(index => (
                <NavFramerItem key={index.id} type={selectedFrame === index.name && "success"} onClick={ () => handleFrame(index.name) }>
                    <ImgFramer type={selectedFrame === index.name && "active"} src={index.image}/>
                    <LabelFramer type={selectedFrame === index.name && "active"}>{ index.name }</LabelFramer>
                </NavFramerItem>
            ))}
      
        </ContainerNavFramer>
    )

}