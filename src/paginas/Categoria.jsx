import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/blog.css'
import ListaCategoria from '../component/ListaCategorias'
import ListaPost from '../component/ListaPost'
import SubCategoria from './SubCategoria'

const Categoria = () => {
    const { url, path } = useRouteMatch();
    const { id } = useParams()
    const [subCategorias, setSubCategorias] = useState([])

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias)
        })
    }, [id])
    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategoria />
            <ul className="lista-categorias container flex">
                {
                    subCategorias.map((subcategoria) => (
                        <li className={`lista-categorias__categoria
                            lista-categorias__categoria--${id}`}
                            key={subcategoria}>

                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>


                    ))
                }
            </ul>
            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPost url={`/posts?categoria=${id}`} />
                </Route>
                <Route exact path={`${path}/:subcategoria`}>
                    <SubCategoria />
                </Route>
            </Switch>

        </>
    )
}

export default Categoria