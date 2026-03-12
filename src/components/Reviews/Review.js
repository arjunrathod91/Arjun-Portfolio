import React, { useState } from 'react'
import './Review.css'
import { West,East } from '@mui/icons-material'

function Review() {
    const reviews = [
        {
            author:'Karan Rathod',
            img:'Img/arjun rathod jpg.jpg',
            desc:'Arjun is very talented boy. He works very good. He have very good analysis of design.'
        },
        {
            author:'Yuvraj Chavhan',
            img:'Img/arjun rathod jpg.jpg',
            desc:'Arjun is very talented boy. He works very good. He have very good analysis of design.'
        },
        {
            author:'Shivram Doiphode',
            img:'Img/arjun rathod jpg.jpg',
            desc:'Arjun is very talented boy. He works very good. He have very good analysis of design.'
        }
    ]

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const showPrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : reviews.length - 1
    );
  };

  const showNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex < reviews.length - 1 ? prevIndex + 1 : 0
    );
  };
  return (
    <div className='review'>
        <h2>Review</h2>
        <div className='review-div'>
            {reviews.map((item,index)=>(
                <div key={index} className={`review-box ${index === currentCardIndex ? 'active' : ''}`} >
                    <div style={{display:'flex',gap:'20px',justifyContent:'start',alignItems:'center'}}>
                        <img src={item.img} alt={item.author}/> 
                        <strong>{item.author}</strong>
                    </div>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
        <div className="flex gap-[20px] text-gray-600 w-full justify-center items-center mt-[20px]">
              <button onClick={showPrevCard} className="controller hover:text-gray-900 hover:bg-gray-100 p-[5px] rounded-[10px]">
                <West />
              </button>
              <button onClick={showNextCard} className="controller hover:text-gray-900 hover:bg-gray-100 p-[5px] rounded-[10px]">
                <East />
              </button>

            </div>
    </div>
  )
}

export default Review
