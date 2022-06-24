import React from 'react';
import { useParams } from 'react-router-dom';
import ListaPost from '../component/ListaPost';

const SubCategoria = () =>{
    const {subCategoria} = useParams
    return (
        <ListaPost url={`/posts?categoria=${subCategoria}`} />
    )
}

export default SubCategoria