import React from 'react';
import {Col} from 'react-bootstrap';
import './FeaturesItems.scss';

const FeaturesItems = (props) => {
    
    return(
        <>
            {props.item.map((itemsBox) => 
                <Col md={4} key={itemsBox.id}>
                    <div className="features__box">
                        
                        <div className="features__img">
                            <img src={itemsBox.itemsImg} alt=""/>
                        </div>
                        <div className="features__content">
                            <a href={itemsBox.titleLink} className="features__title">
                                <h2>{itemsBox.title}</h2>
                            </a>
                            <p>{itemsBox.content}</p>
                        </div>
                    </div>
                </Col>
            )}
        </>
    )
}

export default FeaturesItems;

