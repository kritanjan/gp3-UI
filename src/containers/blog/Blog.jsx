import React from 'react'
import Article from '../../components/articles/Article'
import './blog.css'
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'

let blogs = [
  {
    imgUrl: blog02,
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is? 1',
    date: 'Sep 26, 2021'
  },
  {
    imgUrl: blog03,
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is? 2',
    date: 'Sep 26, 2021'
  },
  {
    imgUrl: blog04,
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is? 3',
    date: 'Sep 26, 2021'
  },
  {
    imgUrl: blog05,
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is? 4',
    date: 'Sep 26, 2021'
  }
  
]
function Blog() {


  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container-groupA'>
          <Article imgUrl={blog01} title='GPT-3 and Open  AI is the future. Let us exlore how it is?' date='Sep 26, 2021' />
        </div>
        <div className='gpt3__blog-container-groupB'>
        {blogs.map((item)=>(<Article imgUrl={item.imgUrl} date={item.date} key={item.title} title={item.title}/>))}
        </div>
      </div>
    </div>
  )
}

export default Blog