import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import mail from '../../assets/email.svg';
import call from '../../assets/call.svg';
import {Container, Wrapper, Title,
  ContactForm,
  ContactTitle,
  ContactInput,
  ContactInputMessage,
  ContactButton } from './styles';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5g9ik3k",
        "template_rtjor54",
        form.current,
        "3nHaLRqXAcSaAz6Qf"
      )
      .then(
        (result) => {
          alert("Message Sent");
          form.current.reset();
        },
        (error) => {
          alert(error);
        }
      );
  };

  return (
    <Container>
      <Wrapper>
      <Title> Feel free to reach out to me!</Title>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me {`:)`}</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" name="message" rows={4} required />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
      <Wrapper>
      <Title>Contact Details</Title>
        <ContactForm>
         <div style={{display: 'flex', flexDirection:'row',alignItems:'center',fontWeight:'500'}}>
            <img style={{height:'5vh', width:'5vh',margin:'1vh'}}
                 src={mail} alt="" />
            <a style={{textDecoration:'none',fontSize:'1.1em',color:'black'}}
                href="mailto:shuchita0321@gmail.com">shuchita0321@gmail.com</a>
         </div>
         <div style={{display: 'flex', flexDirection:'row',alignItems:'center',fontWeight:'500',color:'black'}}>
            <img style={{height:'5vh', width:'5vh',margin:'1vh'}}
                 src={call} alt="" />
            9981469401
         </div>

        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
