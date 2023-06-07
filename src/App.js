import React, { useState } from "react";
import NotesList from "./components/NotesList";
import "./App.css";
import NodeForm from "./components/NodeForm";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      dateEvent: "22.5.2023",
      title: "Going to a restaurant with friends",
    },
    {
      id: 2,
      dateEvent: "24.3.2023",
      title: "Going to a restaurant with friends",
    },
  ]);

  const createPost = (newPost) =>{
      setPosts([...posts, newPost])
  }
 
  const removePost = (el) =>{
    setPosts(posts.filter(p => p.id !== el.id )) //есди ад с массива равен ад с обьектом кторой мы передали
  }

  
  return (
    <div className="App">
      <NodeForm create={createPost}/> 
      {/* функция обратного вызова в пропс вкладываем функцию*/}
      <NotesList remove={removePost} posts={posts} />
    </div>
  );
}

export default App;
