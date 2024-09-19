import { React, useState, useRef} from 'react';

import emailjs from '@emailjs/browser';






function Form() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  
  const handleInputChange = (name, value) => {
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const form = useRef();

const sendEmail = (e) => {
e.preventDefault();
// service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service 
emailjs.sendForm('service_185iimh', 'template_vlw85cx', form.current, 
'Bsx-VnVnxg6DAcwuC')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  setFirstName('');
  setLastName('');
  setEmail('');
  setMessage('');
};
  
  

 
  return (
    <div className="container text-center">
      <h2 className="handjet">
        Talk to you soon {firstName} {lastName}, thanks for reaching out!
      </h2>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <input
          value={firstName}
          name="firstName"
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          type="text"
          placeholder="Last Name"
        />
        <input
        value={email}
        name='email'
        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
       
        type='text'
        placeholder ='Email'
        />
        <input
        value={message}
        name ='message'
        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
        type ='text'
        placeholder='Please enter your message here!'
        />
        <button className="invert-button handjet " type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;