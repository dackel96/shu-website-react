import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
  return (
    <>
      <div className="cards">
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/img-9.jpg"
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src="images/img-2.jpg"
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
                path="/services"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/img-1.jpg"
                text="Conquer the Mighty Mountains and Discover Their Hidden Wonders"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src="images/img-3.jpg"
                text="Set Sail on a Seafaring Adventure and Explore Uncharted Waters"
                label="Luxury"
                path="/services"
              />
              <CardItem
                src="images/img-4.jpg"
                text="TWhere Football Meets Nature: Uncovering the Hidden Wonders of the Wild"
                label="Luxury"
                path="/services"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
