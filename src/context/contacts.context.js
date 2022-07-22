import React,{ createContext, useEffect, useState } from 'react'
import axios from 'axios';

//initialize Context
export const ContactsContext = createContext();

// Set the Provider
export const ContactsProvider = (props) => {
    const [data, setData] = useState();
    const baseUrl = `http://localhost:9000`;
    let contactsUrl = `${this.baseUrl}/contacts`    

    useEffect(()=>{
        axios.get(contactsUrl)
        .then(response => setData(response.data))
        .catch(error => console.log(error));
    },[]);

    return(
        <ContactsContext.Provider value={{data}}>
            {props.children}
        </ContactsContext.Provider>
    )

}