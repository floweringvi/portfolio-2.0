import { React, useState, useRef} from 'react';

import emailjs from '@emailjs/browser';






function Form() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    
    return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const form = useRef();

const sendEmail = (e) => {
e.preventDefault();
// service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service 
emailjs.sendForm('service_185iimh', 'template_f8ckkmi', form.current, 
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
      <form className="form" onSubmit={sendEmail}>
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