import React, {useState} from "react";
import NotesList from "./components/NotesList";
import "./App.css";
import Myinput from "./components/ UI/input/Myinput";
import MyButton from "./components/ UI/button/MyButton";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, dateEvent: '22.5.2023', title: 'Going to a restaurant with friends'},
    {id: 2, dateEvent: '24.3.2023', title: 'Going to a restaurant with friends'},
  ])

  const [dateEvent, setdateEvent] = useState()
  const [title, setTitle] = useState()
  
  const addNewBook = (e) =>{
    e.preventDefault()
      const newPost ={
         id: Date.now(),
         title,
         dateEvent
      }
      setPosts([...posts, newPost])
      setTitle('')
      setdateEvent('')
  }

  return (
    <div className="App">
      <form className="formAdd">
      <Myinput 
          value={title}
          onChange = {e => setTitle(e.target.value)} // для того чтобы отслеживать что вводит пользователь называется двухсторонее свзяывние
          type="text" 
          placeholder="Write an event"></Myinput>
      <Myinput 
          value={dateEvent}
          onChange = {e => setdateEvent(e.target.value)}
          type="text" 
          placeholder="Event date"></Myinput>
      <MyButton onClick={addNewBook}>Create</MyButton>
    </form>
      <NotesList posts={posts}/>
    </div>
  );
}

export default App;
