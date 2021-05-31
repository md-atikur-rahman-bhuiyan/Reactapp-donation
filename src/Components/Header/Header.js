import React from 'react';
import './Header.scss';
import {Container, Row, Col} from 'react-bootstrap';
import NavBar from './NavBar';

const Header = () => {
    return(
        <header className="header">
            <Container>
                <Row>
                    <Col md="auto">
                        <a href="/" className="header__logo">
                            <i className="fas fa-hands-usd"></i>
                            Donation
                        </a>
                    </Col>
                    <Col>
                        <NavBar />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;