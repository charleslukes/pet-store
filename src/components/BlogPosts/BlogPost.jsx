import  React from 'react';
import './BlogPost.css'

const BlogPost = () => {

  return (
    <div className='main-blog'>
      <div>
        <img className='blog-img' src="https://www.humanesociety.org/sites/default/files/styles/768x326/public/2018/08/kitten-440379.jpg?h=f6a7b1af&itok=vU0J0uZR" alt="hidding cat"/>
      </div>
      <div className='blog-details'>
        <div>
          <h3>The Lorem Cat</h3>
        </div>
        <div>
          <p className='blog-posts'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
             architecto ipsum, alias quasi voluptatem reiciendis officiis sequi,
             cum ipsam eos assumenda sint iure nesciunt reprehenderit vitae 
             nostrum sit aperiam fuga.</p>
        </div>
      </div>
    </div>
  )
}

export default BlogPost;