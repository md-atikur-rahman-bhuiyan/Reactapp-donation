import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import './Subscription.scss';

const Subscription = () => {
    const [Mail, setMail] = useState();

    const emailHandler = event => {
        setMail(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        setMail('');

    }
    return(
        <section className="subscription-panel">
            <Container>
                <form onSubmit={submitHandler}>
                    <input type="email" value={Mail} onChange={emailHandler} placeholder="Subscribe to our Newsletter" />
                    <button type="submit">Subscribe</button>
                </form>
            </Container>
        </section>
    )
}

export default Subscription;