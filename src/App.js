import React from "react";
import "./App.css";
import NotesItem from "./components/NotesItem";

function App() {
  const [posts, setPosts] = useState([
    {id:1, dateEvent: '28.3.2000', title: 'Going to a restaurant with friends'},
    {id:2, dateEvent: '28.3.2000', title: 'Going to a restaurant with friends'},
  ])
  return (
    <div className="App">
      <NotesItem post={} />
    </div>
  );
}

export default App;
