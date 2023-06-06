import React from "react";
import MyButton from "./ UI/button/MyButton";
import { AiFillCheckSquare } from "react-icons/ai";

const NotesItem = (props) => {
  return (
    <div className="container_post">
      <div className="post-item">
        <div claassName="post_Datum">
          <h3>{props.number}. {props.el.title} </h3> 
        </div>
  
          <button className="done-icon">
            <AiFillCheckSquare/>
            </button>

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
