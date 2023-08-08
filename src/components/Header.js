import React from 'react'
import './css/header.css'
import useGobalContext from '../context';
function Header() {
  const articles = useGobalContext();
  

    return (
    <div className='header'>
    <div className='lftheader'>
    <p className='categoryandtime'>Innovation    2 Hours ago</p>
    <p className='headernewstitle'>{}</p>
    <div className='headerfeed'>

    { articles.articles.map((art,index)=>{
            if(index<2){return(
              <div className='headerfeednews'>
          <div className='headerfeednewsimg'>
            {<img src={art.urlToImage}/>}
          </div>
          <div className='headerfeednewstitle'>
            <p>{art.title}</p>
          </div>
        </div>);}})
          }
    </div>
    </div>
    <div className='rghtheader'>
       <p>Popular this week</p>
       <div className='popularfeedlist'>

       { articles.articles.map((art,index)=>{
            if(index<5){return(
              <div className='popularfeed'>
              <div className='popularfeedimg'>
              {<img src={art.urlToImage}/>}
              </div>
              <div className='popularfeeddetails'>
              <p>Innovation     2 Hours ago</p>
              <div className='polpularfeedtitle'>
              <p>{art.title}</p>
              </div>
              </div>
             </div>
            );}})
          }
     
   
       </div>

      
    </div>
      
    </div>
  )
}

export default Header
