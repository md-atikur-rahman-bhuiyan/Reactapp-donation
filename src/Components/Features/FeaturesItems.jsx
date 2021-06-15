import React from "react";
import { Col } from "react-bootstrap";
import "./FeaturesItems.scss";
import { Link } from "react-router-dom";

const FeaturesItems = (props) => {
  return (
    <>
      {props.item.map((itemsBox) => (
        <Col md={4} key={itemsBox.id}>
          <div className="features__box">
            <div className="features__img">
              <img src={itemsBox.itemsImg} alt="" />
            </div>
            <div className="features__content">
              <Link to={`/features/${itemsBox.id}`}>
                <h2 className="features__title">{itemsBox.title}</h2>
              </Link>
              <p>{itemsBox.content}</p>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};

export default FeaturesItems;
