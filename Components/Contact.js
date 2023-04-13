import "/src/styles.css";
import React from "react";
export default function Contact(props) {
  return (
    <div className="Contact">
      <img src={`${props.img}`} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>Likes: {props.likes}</p>
      <button onClick={props.handleClick}>Like</button>
    </div>
  );
}
