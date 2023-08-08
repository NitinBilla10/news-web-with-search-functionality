import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import {Autoplay, Pagination } from 'swiper/modules';
import './css/recentpost.css'
import useGobalContext from '../context';

function Recentpost() {
  const articles = useGobalContext();

  return (<>
    <div className='recentpost'>
      <p>Recommended For You</p>
      <div className='slider'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >

{ articles.articles.map((art,index) => {
            if(index<9){
              return(
              <SwiperSlide>
              <div class="card">
              <img src={art.urlToImage} class="card-img-top" alt="/"/>
              <div class="card-body">
                <p class="card-text">{art.title}</p>
                <button class="btn btn-primary">Read More</button>
              </div>
              </div>
              </SwiperSlide>
              );}})
          }
       

      </Swiper>
      </div>
    </div>
    </>
  )
}

export default Recentpost
