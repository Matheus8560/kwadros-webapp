import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uniqueId } from 'lodash';
import filesize from 'filesize';

import { addProductToCartRequest, addUploadToCart, addLoadingCart } from './store/modules/cart/actions';

import GlobalStyle from './styles/global';
import { Container, Content, ContentDropzone } from './styles/styles';

import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';
import Upload from './components/Upload';
import FileList from './components/FileList';
import PhotoFramesMenu from './components/PhotoFramesMenu';

import api from './services/api';

export default function App(){
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);
    const loading = useSelector(state => state.cart.loading);

    const [uploadFiles, setUploadFiles] = useState([]);
    const [frames, setFrames] = useState([]);

    useEffect(() => {
        loadFrames();
        dispatch(addLoadingCart(false));
        
    }, []);

    async function loadFrames(){
        try {
            const response = await api.get('/frames');

            setFrames(response.data);
            dispatch(addProductToCartRequest(response.data[0]));
        } catch(err){
            console.log('algo de errado não deu certo')
        }
    }

    // Carrega fotos do banco*****
    async function loadUploadFiles(){
        try {
            const response = await api.get('/uploads');

            setUploadFiles((state) => {
                let arr = [];
                response.data.map(file => {
                    arr.push({
                        id: file._id,
                        name: file.name,
                        readableSize: filesize(file.size),
                        preview: file.url,
                        uploaded: true,
                        url: file.url,
                        progress: 100
                    });
                });

                return arr;
            });
            
        } catch(error){
            // console.log(error.response.data.error)
        }
    }

    // Envia foto pra esteira
    function handleUploads(files){
        const data = files.map(file => ({
            file, 
            id: uniqueId(),
            name: file.name,
            readableSize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false, 
            error: false,
            url: null,
        }));

        setUploadFiles(uploadFiles.concat(data));
        
        if(uploadFiles.concat(data).length > cart.kit_quantity){
           const quantity = uploadFiles.concat(data).length - cart.kit_quantity;

           dispatch(addProductToCartRequest({
               ...cart,
               quantity
           }))
        } else {
            dispatch(addProductToCartRequest({
                ...cart,
                quantity: 0
            }))
        }

        // Salva no redu
        dispatch(addUploadToCart(data))
        // Envia as fotots pro servidor
        // data.map(index => processUpload(index));
    }


    // Remove Foto da Esteira
    async function handleDelete(id, product_id){

        let newArr;

        setUploadFiles((state) =>  newArr = state.filter(file => file.id !== id) );
        setUploadFiles(newArr);
        
        // const newCart = cart.filter(index => index.id !== product_id);

        if(newArr.length > cart.kit_quantity){
            const quantity = newArr.length - cart.kit_quantity;
 
            dispatch(addProductToCartRequest({
                ...cart,
                quantity
            }))
         } else {
            dispatch(addProductToCartRequest({
                ...cart,
                quantity: 0
            }))
         }
        
        // //atualizar pedido tb 
        // if(newArr.length > 2){
        //     const quantity = newArr.length - 2;
 
        //     dispatch(addProductToCartRequest({
        //         ...newCart,
        //         quantity
        //     }))
        // } else {
        //     dispatch(addProductToCartRequest(newCart))
        // }
    }

    if(loading) return <Loader />
    return (
        <Container>
            <Header />
            <Content>
                <ContentDropzone>
                    <Upload onUpload={e => handleUploads(e)} />
                    <FileList files={uploadFiles} frame={cart.name} onDelete={handleDelete} />
                </ContentDropzone>
                <PhotoFramesMenu frames={frames} />
            </Content>
            <Footer />
            <GlobalStyle />
        </Container>
    );
}
