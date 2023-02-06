import React from 'react'
import './article.css'

export default function Article({ imgUrl, title, date }) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog article" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <p>{date}</p>
        <h1>{title}</h1>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}
