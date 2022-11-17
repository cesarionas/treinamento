import React, { useState } from "react";
import "./BlogPost.css";
/**
 * BlogPost Component
 * @param {post:BlogPostModel} props
 * @returns
 */
function BlogPost(props) {

  const [contador, setContador] = useState(0);
  const [post, setPost] = useState(props.post);

  function shareClickCallBack() {
    setContador(contador + 1);
  }
  function checkboxChangeBack(event) {
    const novoValorExibirImagem = !post.exibirImagem;
    setPost({ ...post, exibirImagem: novoValorExibirImagem });
  }

  return (
    <article className="blogPost">
      <h2>{post.titulo}</h2>
      <div>
        <input
          type="checkbox"
          defaultChecked={post.exibirImagem}
          onChange={checkboxChangeBack}
        />{" "}
        Exibir imagem?
      </div>
      {post.exibirImagem ? <img src={post.imagem} alt={post.titulo} /> : <div></div>}
      <p>{post.texto}</p>
      <button class="share" onClick={shareClickCallBack}>
        Compartilhar!
      </button>
      <div>{contador}</div>
    </article>
  );
}
export default BlogPost;