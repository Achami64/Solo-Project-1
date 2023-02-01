import React, { Component } from 'react';
import '../css/styles.css';
import CardCreator from './CardCreator.jsx';


class Cards extends Component {
    render() {
        return (
            <div className='main-tainer'> 
            {/* image would hopefully go here */}
            <div className='title'> 
            Happy thanksgiving!
            </div>
            <div className='body'> 
            From me and my family to you and yours
            </div>
            <div className='to-from'>
                To: Me
                From Yousuf 
            </div>
            </div>
        )
    }
}

export default Cards;


/* <div class = 'mainContainer'>
//  <div class = 'to-container'>
//    to: 
//  </div>
//  <div class = 'body-container'>
//  <img src = 'Hi'> 
//  Hey there buggah
//  </div>
//  <div class = 'from-container'>
//  from:
//  </div>
//  </div> */