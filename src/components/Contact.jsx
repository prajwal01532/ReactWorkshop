import React, { useContext ,createContext, useState} from 'react'
import ContactDetails from './ContactDetails'

 export const contactContext=createContext(null)


const Contact = () => {
    const [contactData,setContactData]=useState({
name:'Prajwal Pokhrel',
email:'prajwal.hacker@gmail.com',
phone:['+977-9804994584','+977-9749210465'],
address:'Jhapa-Birtamode'

    })

  return (
    
   
<contactContext.Provider value={{contactData}}>
      <ContactDetails/>
</contactContext.Provider >
  
)
}

export default Contact
