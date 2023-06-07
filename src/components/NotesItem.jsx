import React from "react";
import MyButton from "./ UI/button/MyButton";

const NotesItem = (props) => {

  return (
    <div className="container_post">
      <div className="post-item">
        <div claassName="post_Title">
          <h3>{props.number}. {props.el.title} </h3> 
        </div>
  
        <input className="done-icon" type="checkbox" id="myCheckbox" name="myCheckbox" />

        <div claassName="post_Datum">
          <p> {props.el.selectedDate}</p>
        </div>
        <div claassName="post_btn">
          <MyButton onClick={()=> props.remove(props.el)}>
            Delete</MyButton>
        </div>
      
      </div>
    </div>
  );
};

export default NotesItem;
