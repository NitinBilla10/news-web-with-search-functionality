import React from 'react'
import './css/latestpost.css'
import useGobalContext from '../context';

function Latestpost() {
  const articles = useGobalContext();
  return (
    <>
    <div className='latestpost'>
      <div className='heading'>
        <p>Our Latest Post</p>
        <button>View all</button>
      </div>
      <div className='latestpostfeed'>
        <div className='container'>
          <div className='row'>

          { articles.articles.map((art,index)=>{
            if(index<8){return(
          <div className='col-md-3'>
            <div className='latestpostnews'>
              <div className='latestpostimg'><img src={art.urlToImage}/></div>
              <div className='latestposttitle'>
                <p>{art.title}</p>
                <span>Floyd Miles      2 Hours ago</span>
              </div>
            </div>
          </div>);}})
          }
        </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Latestpost
