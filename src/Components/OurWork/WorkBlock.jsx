import React from 'react';
import {Col, Image} from 'react-bootstrap';
import './WorkBlock.scss';


const WorkBlock = (props) => {
    return(
        <>
        {props.PostItems.map((Postitem) => 
            <Col xl={2} md={4} xs={2} key={Postitem.id} className="post-item">
               
                <div className="post-item__img">
                    <Image src={Postitem.imgUrl} alt="" rounded />
                </div>
            </Col>
        )}
        </>
    )
}

export default WorkBlock;