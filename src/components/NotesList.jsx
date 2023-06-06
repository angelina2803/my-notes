import React from "react";
import NotesItem from "./NotesItem";

const NotesList = ({posts}) => {
  return (
    <div>
      <h2 style={{textAlign:'center'}}>My notes</h2>
      {posts.map((el, index) => 
        <NotesItem number={index + 1} el={el} key={el.id} />
      )}
    </div>
  );
};

export default NotesList;
