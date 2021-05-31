import React from 'react';
import {Container} from 'react-bootstrap';
import WorkList from './WorkList';
import './Work.scss';


const Work = () => {
    return (
        <section className="work-panel">
            <Container fluid>
                <h3 className="work-panel__title">Our Work</h3>
                <WorkList />
            </Container>
        </section>
    )
}

export default Work;