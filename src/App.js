import React, { useState } from "react";
import NotesList from "./components/NotesList";
import "./App.css";
import NodeForm from "./components/NodeForm";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      selectedDate: "28.03.2000",//тут нужно поменять чтобы выводило текст как то с помощью toISOString()
      title: "Going to a restaurant with friends",
    },
    {
      id: 2,
      selectedDate: "28.03.2000",
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
