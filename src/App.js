import React, {useState} from "react";
import NotesItem from "./components/NotesItem";
import NotesList from "./components/NotesList";
import "./App.css";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, dateEvent: '22.5.2023', title: 'Going to a restaurant with friends'},
    {id: 2, dateEvent: '24.3.2023', title: 'Going to a restaurant with friends'},
  ])
  return (
    <div className="App">
      <NotesList posts={posts}/>
    </div>
  );
}

export default App;
