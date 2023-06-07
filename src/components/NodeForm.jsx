import React, {useState} from 'react';
import Myinput from './ UI/input/Myinput';
import MyButton from './ UI/button/MyButton';

const NodeForm = ({create}) => {
    const [dateEvent, setdateEvent] = useState();
    const [title, setTitle] = useState();
  
    const addNewBook = (e) => {
      e.preventDefault();
      const newPost = {
        id: Date.now(),
        title,
        dateEvent,
      };
      create(newPost)
      setTitle("");
      setdateEvent("");
    };
    return (
        <form className="formAdd">
        <Myinput
          value={title}
          onChange={(e) => setTitle(e.target.value)} // для того чтобы отслеживать что вводит пользователь называется двухсторонее свзяывние
          type="text"
          placeholder="Write an event"
        ></Myinput>
        <Myinput
          value={dateEvent}
          onChange={(e) => setdateEvent(e.target.value)}
          type="text"
          placeholder="Event date"
        ></Myinput>
        <MyButton onClick={addNewBook}>Create</MyButton>
      </form>
    );
};

export default NodeForm;