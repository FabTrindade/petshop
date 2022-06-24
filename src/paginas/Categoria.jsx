import React from 'react'
import { Route, useParams, useRouteMatch } from 'react-router-dom'
import '../assets/css/blog.css'
import ListaCategoria from '../component/ListaCategorias'
import ListaPost from '../component/ListaPost'

const Categoria = () => {
    const { path } = useRouteMatch();
    const { id } = useParams()
    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategoria />
            <Route exact path={`${path}/`}>
                <ListaPost url={`/posts?categoria=${id}`} />
            </Route>
        </>
    )
}

export default Categoria