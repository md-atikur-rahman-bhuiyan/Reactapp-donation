import React from 'react';
import {Container, Row} from 'react-bootstrap';
import FeaturesItems from './FeaturesItems';
import './Features.scss'

// Img import 
import Img1 from '../../img/card-img.webp';
import Img2 from '../../img/card-img-2.webp';
import Img3 from '../../img/card-img-3.webp';

const Features = (props) => {
    const FeaturesContent = [
        {
            id: 'f1',
            title: 'Features Box Title',
            titleLink: '#',
            itemsImg: Img1,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. '
        },
        {
            id: 'f2',
            title: 'Features Box Title 2',
            titleLink: '#',
            itemsImg: Img2,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. '
        },
        {
            id: 'f3',
            title: 'Features Box Title 3',
            titleLink: '#',
            itemsImg: Img3,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. '
        },
    ];
    return(
        <section className="features-panel">
            <Container>
                <Row>
                    <FeaturesItems item={FeaturesContent}/>
                </Row>
            </Container>
        </section>
    )
}

export default Features;
