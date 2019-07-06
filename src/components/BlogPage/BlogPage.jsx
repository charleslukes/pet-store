import React,{useState} from 'react';
import './BlogPage.css';
import BlogPost from '../Blog Posts/BlogPost';
import Pagination from '../common/pagination';


const BlogPage = () => {
  // the state of the blog will be here but the components will be gotten  from blog posts
  const fake = [1,2,3,4,5,6,7];
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3)

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = fake.slice(indexOfFirstPost, indexOfLastPost);


  //change the posts
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <>
      <div className='blog'>
        <div>
          {currentPosts.map(elem => <BlogPost />)}
          <Pagination postPerPage={postPerPage} totalPosts={fake.length} paginate={paginate}/>
        </div>
        <div className='blog2'>
          <div className='side-info1'>
            <h3>Blog Search</h3>
            <input type="text" />
            <button><i class="fas fa-search"></i></button>
          </div>
          <h3 className='posts-title'>Lastest Posts</h3>
          <div className='latest-post'>
            <div>
              <img src="https://www.humanesociety.org/sites/default/files/styles/768x326/public/2018/08/kitten-440379.jpg?h=f6a7b1af&itok=vU0J0uZR" alt="cat hidding" />
            </div>
            <div>
              <h3>The lorem cat</h3>
              <p>This is a dummy text to show...</p>
              <p className='read-more'>Read more...</p>
            </div>
          </div>
          <div className='create-post'>
            <button className='block'>CREATE BLOG POST</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPage;