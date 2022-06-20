import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { busca } from '../api/api';

const Post = () => {
    let history = useHistory();
    const { id } = useParams();
    const [post, setPost] = useState({})

    useEffect(() => {
        busca(`/posts/${id}`, setPost)
            .catch(() => {
                history.push('/404')
            })
    }, [id])
    return (
        <main className="container flex flex--centro">
            <article className='cartao'>
                <h2 className='cartao__titulo'>{post.title}</h2>
                <p className='carta__texto'>{post.body}</p>
            </article>
        </main>
    )
}

export default Post