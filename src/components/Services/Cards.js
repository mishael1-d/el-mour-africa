import React from "react";
import "./Services.css";
import image from "../../assets/hero-image.png";
const cardDetails = [
  {
    title: "Card title1",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam labore quasi distinctio saepe hic eligendi, possimus unde repellendus rem. Fugit doloribus ducimus natus libero iusto ea hic quod nisi consequuntur.",
    imageUrl: image,
  },
  {
    title: "Card title2",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam labore quasi distinctio saepe hic eligendi, possimus unde repellendus rem. Fugit doloribus ducimus natus libero iusto ea hic quod nisi consequuntur.",
    imageUrl: image,
  },
  {
    title: "Card title3",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam labore quasi distinctio saepe hic eligendi, possimus unde repellendus rem. Fugit doloribus ducimus natus libero iusto ea hic quod nisi consequuntur.",
    imageUrl: image,
  },
];

const Cards = ({ title, body, imageUrl }) => {
  return (
    <div className="card-container">
      {cardDetails.map((card) => {
        return (
          <div className="card-wrapper" key={card.title}>
            <div className="image-container">
              <img src={card.imageUrl} alt="" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h3>{card.title}</h3>
              </div>
              <div className="card-body">
                <p>{card.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
