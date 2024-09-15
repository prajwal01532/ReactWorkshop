import React, { useContext } from 'react'
import { contactContext } from './Contact'

const ContactDetails = () => {
    const {contactData}=useContext(contactContext)
  return (
    <div>
      <h1 className='text-red-500 font-bold'>Contact Information</h1>
      <p>Name:{contactData.name}</p>
      <p>Email:{contactData.email}</p>
    </div>
  )
}

export default ContactDetails
