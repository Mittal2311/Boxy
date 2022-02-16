import React from "react";

const Card = (props) => {
  const { icon, cardType, title, description, link, linkbutton } = props.data;
  return (cardType == "card") ? (
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-6">
      <div className="card_box">
        <a href="#" className="box_icon">
          <img src={icon} className="img-responsive" />
        </a>
        <h5>{title}</h5>
        <p>{description}</p>
        {
          (!linkbutton) ?(<a href={link} className="card_link">
          learn more
        </a>) : (<button className="card_link" onClick={linkbutton}>click</button>)
        } 
      </div>
    </div>
  ) : (cardType == "image") ? (
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-6">
      <div className="card">
        <img src={link}/>
      </div>
    </div>
  ) : (
    <div></div>
  );
};
export default Card;
