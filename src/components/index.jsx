import { React, useState } from 'react';

import './style.css';

const fonts ={
  fontFamily:"serif"
}

function Form() {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    
    return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (e) => {
    
    e.preventDefault();

    
    alert(`Thanks ${firstName} ${lastName} , I'll get back to you shortly`);
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container text-center">
      <h2 style={fonts}>
        Talk to you soon {firstName} {lastName}, thanks for reaching out!
      </h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
        value={email}
        name='email'
        onChange ={handleInputChange}
        type='text'
        placeholder ='Email'
        />
        <input
        value={message}
        name ='message'
        onChange ={handleInputChange}
        type ='text'
        placeholder='Please enter your message here!'
        />
        <button style={{color:"green"}} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;