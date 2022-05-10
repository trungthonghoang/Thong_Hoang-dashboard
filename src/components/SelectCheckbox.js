import React from "react";

export default function SelectInput(props) {
  const handleSelectChange = (event) => {
    props.selectChange(props.selectName, event.target.checked);
  };

  return (
    <div className="itemcontainer">
      <label className="switch">
        <input
          type="checkbox"
          onClick={handleSelectChange}
          defaultChecked
        ></input>
        <span className="slider round"></span>
      </label>
      <p className="checkbox-title">{props.selectText}</p>
    </div>
  );
}
