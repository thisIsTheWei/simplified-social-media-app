import React, { useState } from 'react';
import './Styles/App.css'
import PostList from "./Post/PostList";
import Login from "./Auth/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div className="App">
      {isAuthenticated ? (
        <PostList />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
}

export default App;