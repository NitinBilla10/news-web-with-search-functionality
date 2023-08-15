import React, { useState } from 'react'
import './css/searchpage.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Subcribe from './Subcribe'
import useGobalContext from '../context'


function Searchpage() {
const {query , searchPost} = useGobalContext();
const articles = useGobalContext();
// const [search,setSearch]=useState('');

  return (
    <div>
    <div className='bgcolor'>
      <Navbar/>
      <div className='searchinput'>
        <div class="mb-3">
         <input type="text" class="form-control" id="searchinput" placeholder=" Search......"
          value={query}
           onChange={(e)=>{searchPost(e.target.value)}}
          //  onKeyDown={(e)=>{if(e.key === 'Enter'){searchPost(search)}}}
         />
        </div>
        </div>  
      </div>
      <div className='searchresult'>
           <p>News</p>
           {articles.articles &&
            articles.articles.map((art,index)=>{
            if(index<25){  return (          
            <div className='searchfeed'>
            <div className='searchfeedimg'>{<img src={art.urlToImage}/>}</div>
            <div>
            <div className='searchfeedtitle'>
             <p> {art.title}</p>
            </div>
            <div className='searchfeedsummary'>
            <p>{art.description}</p>
            </div>
            </div>
            </div>)}}
            )}

        </div>
      <Subcribe/>
      <Footer/>
    </div>
  )
}

export default Searchpage
