import React from "react";
import NotesItem from "./NotesItem";

const NotesList = ({posts, remove}) => {
  return (
    <div>
      <div className="containerNotes">
      <h2 style={{textAlign:'center'}}>My plans for today</h2> 
      {posts.map((el, index) => 
        <NotesItem remove={remove} number={index + 1} el={el} key={el.id} />
      )}
      </div>
    </div>
  );
};

export default NotesList;
