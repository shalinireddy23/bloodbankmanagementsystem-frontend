import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import bb from '../images/bb.jpg';
import bb1 from '../images/bb1.png';
import bb2 from '../images/bb2.jpg';
import bb3 from '../images/bb3.png';
import bb4 from '../images/bb4.png';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these BloodBanks!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={bb1}
              text='1.Sunshine BloodBank'
              label='Hebbal'
              />
            <CardItem
              src={bb4}
              text='2.Jeevan BloodBank'
              label='WhiteField'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={bb2}
              text='3.Apollo BloodBank'
              label='Yelahanka'
            />
            <CardItem
              src={bb3}
              text='4.TJH BloodBank'
              label='Bommanahalli'
            />
            <CardItem
              src={bb}
              text='5.LifeLine BloodBank'
              label='Marathalli'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;