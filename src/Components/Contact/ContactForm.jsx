import React, {useState} from 'react';
import './ContactForm.scss';

const ContactForm = () => {

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Subject, setSubject] = useState('');
    const [Message, setMessage] = useState('');
    // const [Confirm, setConfirm] = useState(false);

    const ChangeNameHandler = event => {
        setName(event.target.value);
    }

    const ChangeEmailHandler = event => {
        setEmail(event.target.value);
    }

    const ChangeSubjectHandler = event => {
        setSubject(event.target.value);
    }

    const ChangeMessageHandler = event => {
        setMessage(event.target.value);
    }


    const onSubmitHandler = event => {
        event.preventDefault(); 

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');

    }



    return (
        <div className="contact__form">
            <form onSubmit={onSubmitHandler}>
                <input type="text" value={Name} onChange={ChangeNameHandler} placeholder="Enter Your Name" />
                <input type="mail" value={Email} onChange={ChangeEmailHandler} placeholder="Enter Your Email" />
                <input type="text" value={Subject} onChange={ChangeSubjectHandler} placeholder="Enter Your Subject" />
                <textarea value={Message} onChange={ChangeMessageHandler} placeholder="Enter Your Message">
                </textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default ContactForm;