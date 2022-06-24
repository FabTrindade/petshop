import React, { useEffect, useState } from 'react'
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/blog.css'
import ListaCategoria from '../component/ListaCategorias'
import ListaPost from '../component/ListaPost'

const Categoria = () => {
    const { url, path } = useRouteMatch();
    const { id } = useParams()
    const [subCategoria, setSubCategoria] = useState([])

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubCategoria(categoria.subcategorias)
        })
    })
    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategoria />
            <ul className="lista-categorias container flex">
                {
                    subCategoria.map((subcategoria) => (
                        <li className={`lista-categorias__categoria
                            lista-categorias__categoria--${id}`}
                            key={subcategoria}>
                            
                            <Link to={`${url}/${subCategoria}`}>
                                {subCategoria}
                            </Link>

                        </li>

                    ))
                }
            </ul>
            <Route exact path={`${path}/`}>
                <ListaPost url={`/posts?categoria=${id}`} />
            </Route>
        </>
    )
}

export default Categoria