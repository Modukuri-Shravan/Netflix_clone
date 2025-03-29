import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
const TitleCards = ({title,category}) => {
const [apidata,setapidata]=useState([])


  const cardref=useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY0ZTFjY2I1OTQwY2VhY2Q1MmM0MjYxMTFkMmNlMiIsIm5iZiI6MTc0Mjc5MzM5MS45NTEsInN1YiI6IjY3ZTBlYWFmYjhlMGZlYTkzNDA4MTBkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HPq35nEAp8x25zES2UDYNxz1QCfdIikt89sJ-TsHbIs'
    }
  };


  const handlewheel=(event)=>{
    event.preventDefault();
    cardref.current.scrollLeft +=event.deltaY;
  }

  useEffect(()=>
  {
    // fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    // .then(res => res.json())
    // .then(res => setapidata(res.results))
    // .catch(err => console.error(err));
    // cardref.current.addEventListener("wheel",handlewheel);

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', { 
      method: 'GET',
      timeout: 10000 // Increase the timeout to 10 seconds (default is usually shorter)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
  

  },[])
  return (
    <div className="titlecards">
      {title?title:<h2>popular on Netflix</h2>}
<div className="card-list" ref={cardref}>
    {apidata.map((card,index) => {
      // const imageUrl = `https://image.tmdb.org/t/p/w500${card.backdrop_path}`;
        return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500$`+card.backdrop_path} alt="" />
            <p className='card-name'>{card.original_title}</p>
        </div>
    })}
</div>
    </div>
  )
}

export default TitleCards