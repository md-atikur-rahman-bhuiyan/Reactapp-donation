import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Map from './Map';
import ContactForm from './ContactForm';
import './Contact.scss';


const Contact = () => {
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26359294.213879213!2d-113.71754000532059!3d36.24708982631331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1622462721433!5m2!1sen!2sbd" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

    return (
        <section className="contact-panel">
            <Container>
                <h3 className="contact-panel__title">Contact</h3>
                <Row>
                    <Col md={6}>
                        <Map iframe={iframe} />
                    </Col>
                    <Col md={6}>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;