import React, { useState, Fragment, useEffect  } from 'react';
import ReactDatatable from '@ashvin27/react-datatable';
import { FaPencilAlt, FaRegTrashAlt, FaPlus, FaRegEye } from 'react-icons/fa';

import GlobalStyle from '../../styles/global';
import { Container, Content } from './styles';

import HeaderAdm from '../../components/HeaderAdm';
import Loader from '../../components/Loader';

import api from '../../services/api';

export default function Home({ history }){
    const [loading, setLoading] = useState(true);

    // DEFININDO COLUNAS
    const columns = [
        {
            key: "order_id",
            text: "ID do Pedido",
            className: "name",
            align: "left",
            sortable: true, 
        },
        {
            key: "frame",
            text: "Moldura",
            className: "frame",
            align: "left",
            sortable: true, 
        },
        {
            key: "status",
            text: "status",
            className: "status",
            align: "left",
            sortable: true
        },
        {
            key: "action",
            text: "Action",
            className: "action",
            width: 200,
            align: "left",
            sortable: false,
            cell: record => { 
                return (
                    <Fragment>
                        <button
                            className="btn btn-success"
                            onClick={() => detailsRecord(record)}
                            style={{marginRight: '5px'}}>
                                
                            <FaRegEye style={{color: '#FFF'}} /> Baixar
                        </button>
                        <button 
                            className="btn btn-danger" 
                            onClick={() => deleteRecord(record)}>
                           <FaRegTrashAlt />
                        </button>
                    </Fragment>
                );
            }
        }
    ];

    const config = [{
        page_size: 5,
        length_menu: [ 5, 10, 15, 20 ],
        button: {
            excel: false,
            print: false,
            extra: false,
        },
        show_length_menu: false,
        show_first: false,
        show_last: false,
        show_info: false
    }];

    const [records, setRecords] = useState([]);

    useEffect(() => {
        loadUploads();
        setTimeout(() => setLoading(false), 100)
    }, []);

    async function loadUploads(){
        try {
            const response = await api.get('/uploads');

            let newArr = [];
            response.data.map(upload => {
                let indexUp = newArr.findIndex(index => index.order_id === upload.order_id);
                if(indexUp >= 0 ){
                    newArr.push({
                        id: upload._id,
                        order_id: upload.order_id,
                        frame: upload.frame,
                        status: upload.status,
                    })
                }
            })

            setRecords(newArr);
        }catch (err){
            console.log('Algo de errado não deu certo')
        }
    }

    const detailsRecord = record => {
        console.log('baixar aqui')
    }

    const deleteRecord = async record => {
        setLoading(true);
        try {
            await api.delete(`/uploads/${record._id}`);

            loadUploads();
            
            // Notifications('success', 'Cliente Deletado com Sucesso!');
            
            setLoading(false)

        } catch(error){
            // Notifications('error', error.response.data.error);
            setLoading(false);
        }
        
    }

    if(loading) return <Loader />
    
    return(
        <Container>
            <HeaderAdm />
            <Content>
                <article>
                    <ReactDatatable
                        config={config}
                        records={records}
                        columns={columns}
                    />
                </article>
            </Content>
            <GlobalStyle />
        </Container>
    );
}