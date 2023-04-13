import "/src/styles.css";
import React from "react";
export default function Search(props) {
  const [inputValue, setInputValue] = React.useState("");
  function handleInputValue(event) {
    setInputValue(event.target.value);
  }
  function handleSearch() {
    props.handleClick(inputValue);
  }
  return (
    <div className="Search">
      <input type="text" value={inputValue} onChange={handleInputValue} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
