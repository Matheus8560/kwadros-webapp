import React, {useState, useEffect} from 'react';

import Loader from '../../components/Loader';
import { Notifications } from '../../components/Notifications';

import api from '../../services/api';

export default function Login({ history }){
    const [loading, setLoading] = useState(false);
    const [ field, setField ] = useState({
        email: '',
        password: ''
    });

    async function handleSubmit(e){
        e.preventDefault();

        setLoading(true);

        try {
            const response = await api.post('/sessions', field);

            sessionStorage.setItem('id', response.data.id);
            sessionStorage.setItem('email', response.data.email);
            sessionStorage.setItem('token', response.data.token);

            history.push('/home');

        } catch(err){
            Notifications('error', err.response.data.error);
            setLoading(false)
        }
    }

    const handleChange = (event) => {
        const target = event.target;
        const {name, value} = target;
        setField({ ...field, [name]:value });
    }

    if(loading) return <Loader />

    return(
        <section>
            <form onSubmit={handleSubmit} method="POST">
                <input type="email" name="email" value={field.email} onChange={handleChange} placeholder="Email:" />
                <input type="password" name="password" value={field.email} onChange={handleChange} placeholder="Senha:" />
                <button>Entrar</button>
            </form>
        </section>
    );
}