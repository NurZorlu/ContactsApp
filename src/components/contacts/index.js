import {useState, useEffect} from "react";
import './styles.css'
import List from './List/index';
import Form from './Form'

function Contacts(){
    const [contacts, setContacts] = useState([
        {
            fullname: "Mehmet",
            phone_number: "1231234"
        }, 
        {
            fullname: "Ayse",
            phone_number: "56737364"
        }, 
        {
            fullname: "Nazli",
            phone_number: "8392929"
        },
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])


    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>

        </div>
    )
}

export default Contacts;