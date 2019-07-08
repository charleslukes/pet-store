import React from 'react';
import tinydog from '../common/img/tinydog.jpg';
import InputBox from '../common/InputBox'
import './contact.css'

const ContactPage = () => {
//check out cloud dunary


  const handleChange = (e) => {
    return console.log(e.target.value);
  }

  return (
    <div className='contact-informations'>
      <div className='contact-image'>
        <img src={tinydog} alt="a tiny dog"/>
      </div>
      <div className='centered-contact-text'>Contact us</div>
      <div className='contact-input-section'>

        <div className='contact-input-form'>
          <label>Your Name*</label>
          <InputBox  className={'input-form'} handleChange={handleChange}/>
          <label>Your Email*</label>
          <InputBox  className={'input-form'} handleChange={handleChange}/>
          <label>Subject</label>
          <InputBox kind={'input'}  className={'input-form'} handleChange={handleChange}/>
          <label>Your Message</label>
          <InputBox textarea  kind={'textarea'}  className={'input-formarea'} handleChange={handleChange}/>
          <button>Submit</button>
        </div>
        <div className='contact-form-sidelogo'>
          <p className='contact-form-sidelogo-title'>9pets</p>
          <p>Contact Information</p>
          <p>22, new road avenue, Lagos Nigeria</p>
          <p>08102384845 or 012340494</p>
          <p>info@9pets.gmail.com</p>
        </div>
      </div>
    </div>
  )

}

export default ContactPage;