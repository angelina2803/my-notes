import React from "react";

const NotesItem = (props) => {
  return (
    <div className="container_post">
      <div className="post-item">
        <div claassName="post_Datum">
          <h3>{props.number}. {props.el.dateEvent}</h3>
        </div>
        <div claassName="post_Title">
          <p>{props.el.title}</p>
        </div>
        <div claassName="post_btn">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;
