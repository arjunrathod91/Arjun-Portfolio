import React, { useState ,useRef } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import Cursor from "../Cursor/Cursor";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";

function Contact() {
  // const [contact, setContact] = useState(false);

  const [success,setSuccess] = useState(false)
  const [error,setError] = useState(false)

  const ref = useRef()
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_01fiesq', 'template_jdauwpi', formRef.current, '8vlDde0Y1hQ6NUYMm')
      .then((result) => {
        setSuccess(true)
      }, (error) => {
          setError(true)
      });
  };

  //first the big button says contact me
  //after this it have to gon and out contact page have to show
  return (
    <div className="contact" id="contacts">
      <strong className="heading">Contacts</strong>
      {/* {contact ? (
        <>
          <button className="cont-btn" onClick={() => setContact(!contact)}>
            Contact Me
          </button>
        </>
      ) : (
        <></>
      )} */}
      <div className="cont-container">
        <div className="text-info flex-col">
          <h2>Lets Connect Together</h2>
          <strong>Email</strong>
          <p>ar885209@gamil.com</p>
          <strong>Tell No.</strong>
          <div className="social flex">
            <p><a href="https://www.linkedin.com/in/arjun-rathod"><LinkedInIcon/></a></p>
            <p><a href="https://github.com/arjunrathod91"><TwitterIcon/></a></p>
            <p><a href="https://github.com/arjunrathod91"><GitHubIcon/></a></p>
            <p><a href="https://github.com/arjunrathod91"><FacebookIcon/></a></p>
          </div>
        </div>
        <div className="cont-inp">
         { <form  ref={formRef} onSubmit={sendEmail}>
          <input type="text" placeholder="Name." name="name" />
            <input type="text" placeholder="Email" name="email" />
            <textarea rows="8" placeholder="Message" name="message"></textarea>
            <button className="cont-btn">Submit</button>
            {error && alert("Sorry for inconvinent! Your message is not deliverd")}
            {success && alert("Your message is deliverd to the author.You will get reply soon.")}
          </form>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
