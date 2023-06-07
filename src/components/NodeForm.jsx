import React, { useState } from "react";
import Myinput from "./ UI/input/Myinput";
import MyButton from "./ UI/button/MyButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NodeForm = ({ create }) => {
  const [title, setTitle] = useState();
  const [selectedDate, setSelectedDate] = useState(null);

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      selectedDate: selectedDate.toISOString(),
    };
    create(newPost);
    setTitle("");
    setSelectedDate("");
  };
  return (
    <form className="formAdd">
      <Myinput
        value={title}
        onChange={(e) => setTitle(e.target.value)} // для того чтобы отслеживать что вводит пользователь называется двухсторонее свзяывние
        type="text"
        placeholder="Write an event"
      ></Myinput>
      <DatePicker
        className="myInput_Date"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select date"
      />
      <MyButton onClick={addNewPost}>Create</MyButton>
    </form>
  );
};

export default NodeForm;
