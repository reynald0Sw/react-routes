import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { blogdata } from './BlogData';
import { useAuth } from './auth';


function BlogPost() {
  const navigate = useNavigate();

  const { slug } = useParams();
  const auth = useAuth();
  const blogpost = blogdata.find(post => post.slug === slug);
  const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;

  const returnToBlog = () => {
    navigate('/blog');
  };

  return (
    <>
      <h2>{blogpost.title}</h2>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>
      <button onClick={returnToBlog}>back</button>

      {canDelete && (
        <button>Eliminar BlogPost</button>
      )}
    </>
  );
}

export {BlogPost};