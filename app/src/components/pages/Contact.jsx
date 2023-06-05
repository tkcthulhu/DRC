/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import "../../css/contact.css";
import emailjs from "@emailjs/browser";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function Contact(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

  const form = useRef();
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    //validation
    const isValid = validateForm();
    if (isValid) {
      emailjs
        .sendForm(
          "service_98l9zyo",
          "template_8nu07sv",
          form.current,
          "B4kDp6ouIiwVKzcTo"
        )
        .then(
          (result) => {
            console.log(result.text);
            setShow(true)
            // alert(result.text);
            resetForm();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    //Name validation
    const nameInput = form.current.elements.customer_name;
    if (!nameInput.value.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    //Email validation
    const emailInput = form.current.elements.customer_email;
    if (!emailInput.value.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
      errors.email = "Please add a valid email address ";
      isValid = false;
    }

    //Message validation
    const messageInput = form.current.elements.message;
    if (!messageInput.value.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const resetForm = () => {
    form.current.reset();
    setErrors({});
  };

  return (
    <>
      <div>
        <div className="contact-form-wrapper d-flex justify-content-center text-white">
          <form
            ref={form}
            onSubmit={sendEmail}
            action="#"
            className="contact-form dark-bg-card"
          >
            <h5 className="title">Contact us</h5>
            <p className="description">
              Do not hesitate to contact us for any automation needs or to
              schedule a consultation!
            </p>
            <div>
              <input
                name="customer_name"
                type="text"
                className="form-control rounded border-white mb-3 form-input"
                id="name"
                placeholder="Name"
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
              <input
                name="customer_email"
                type="email"
                className="form-control rounded border-white mb-3 form-input"
                placeholder="Email"
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                className="form-control rounded border-white mb-3 form-text-area"
                rows="5"
                cols="30"
                placeholder="Message"
                required
              ></textarea>
              
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <div className="submit-button-wrapper">

            <Button variant="primary" type="submit" onClick={sendEmail} >Submit</Button>
              
            <Modal show={show} onHide={handleClose} size="sm">
            <Modal.Header closeButton>
              <Modal.Title>Message Sent</Modal.Title>
            </Modal.Header>

          </Modal>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}
