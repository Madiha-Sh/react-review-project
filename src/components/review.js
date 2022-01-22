import React, { useState, useEffect } from 'react';
import data from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {id, image, job, name, text} = data[index];
  console.log(id);

  const checkIndex = (index) => {
    if(index > data.length - 1) {
      return 0;
    }
    if(index < 0) {
      return data.length - 1;
    }
    return index;
  }

  const handleNext = () => {
    setIndex(prev => {
      const newIndex = prev+1;
      return checkIndex(newIndex);
    })
  }

  const handlePrev = () => {
    setIndex(prev => {
      const newIndex = prev-1;
      return checkIndex(newIndex);
    })
  }

  const handleRandom = () => {
    let randomIndex = Math.floor(Math.random()*data.length);
    if(randomIndex === index){
      randomIndex = index + 1;
    }
    return setIndex(checkIndex(randomIndex));
    // setIndex(prev => {
    //   if(randomIndex === prev) {
    //     randomIndex = prev + 1;
    //   }
    //   return checkIndex(randomIndex)
    // })
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={handleRandom}>
        surprise me
      </button>
    </article> 
  ); 
}
 
export default Review;