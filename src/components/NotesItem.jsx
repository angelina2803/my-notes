import React from "react";
import MyButton from "./ UI/button/MyButton";

const NotesItem = (props) => {
  return (
    <div className="container_post">
      <div className="post-item">
        <div claassName="post_Datum">
          <h3>{props.number}. {props.el.title} </h3>
        </div>
        <div claassName="post_Title">
          <p> {props.el.dateEvent}</p>
        </div>
        <div claassName="post_btn">
          <MyButton>Delete</MyButton>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;
