import React, { useRef } from "react";
import styled from "styled-components";

// ...

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // ...
  };

  return (
    <div>
      <StyledLoremText>
        <p>We would love to hear from you, leave us a message and we will contact you</p>
      </StyledLoremText>
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Your Name" />
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Your Email" />
          <label>Do you have any questions? Please leave us a message</label>
          <textarea name="message" placeholder="Your Message" />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
    </div>
  );
};

const StyledLoremText = styled.div`
  p {
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 22px;
    color: #333; /* Change text color */
    line-height: 1.5; /* Adjust line height for better readability */
    margin-bottom: 20px; /* Add space between the text and the form */
    text-align: center; /* Center-align the text */

    /* You can also add a background or a border for visual separation */
    /* background: #f8f8f8; */
    /* border: 1px solid #ccc; */
  }
`;


// ...


export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 20px;

    

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
      padding: 10px 20px; /* Increase the padding for a larger button */
      border-radius: 5px; /* Add rounded corners */
      font-weight: bold; /* Make the text bold */
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Add a subtle box shadow */
    
      transition: background 0.3s ease, transform 0.1s ease; /* Add smooth hover transition */
    }
    
    input[type="submit"]:hover {
      background: #FF7400; /* Change the background color on hover */
      transform: scale(1.05); /* Add a slight scale-up effect on hover */
    }
    
    }
  }
`;
