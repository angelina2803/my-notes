import React from "react";
import MyButton from "./ UI/button/MyButton";
import { AiFillCheckSquare } from "react-icons/ai";

const NotesItem = (props) => {
 const changeColor = ()=>{
  let doneButton = document.querySelector('.done-icon');
  doneButton.classList.add("change_color_done-icon");
 }
  return (
    <div className="container_post">
      <div className="post-item">
        <div claassName="post_Datum">
          <h3>{props.number}. {props.el.title} </h3> 
        </div>
  
          <button onClick={changeColor} className="done-icon">
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
