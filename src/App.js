import "./styles.css";
import React from "react";
import Contact from "/Components/Contact.js";
import Search from "/Components/Search.js";
export default function App() {

  const data = [
    {
      id: 1,
      name: "Ted",
      email: "Ted@gmail.com",
      img: "ted.jpg",
      likes: 0
    },
    {
      id: 2,
      name: "Bob Bobbington",
      email: "BobBobbington@gmail.com",
      img: "bob.png",
      likes: 0
    },
    {
      id: 3,
      name: "Frogger Smith",
      email: "frogwithaTopHat@gmail.com",
      img: "frogger.png",
      likes: 0
    },
  ];
  
  const [contacts, setContacts] = React.useState(data);
  function like(key) {
    setContacts((prevContacts) => {
      return prevContacts.map((contact) => {
        if (contact.id === key) {
          return { ...contact, likes: contact.likes + 1 };
        } else {
          return contact;
        }
      });
    });
  }
  function search(input) {
    setContacts((prevContacts) => {
      return prevContacts.filter(contact => {
        return contact.name.includes(input);
      });
    });
  }
  return (
    <div className="App">
      <Search handleClick={search}/>
      <div className="contacts">
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          handleClick={() => like(contact.id)}
          {...contact}
        />
      ))}
      </div>


    </div>
  );
}
