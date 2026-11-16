import {useState} from 'react';
import './ContactPage.css';
function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
    }
    return (
        <section className="contactpage">
            <h2>Contact</h2>
            <form className="contactform" onSubmit={handleSubmit}>
                <label htmlFor = "name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    />
                    <button type="submit">Submit</button>
                    </form>
                    {submitted && <p>Thanks for the message.</p>}
                    </section>
    );
}

export default ContactPage;