import { useEffect, useState } from 'react';
import { PostListClick } from './Components/PostListClick';
import './App.css';
import { LanguageProvider } from './Components/LanguageContext';
import LanguageSwitch from './Components/LanguageSwither';

function App() {
  const [posts, setPosts] = useState([]);

  const fetchDataPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      });
  };
  // useEffect(() => {
  //   fetchDataPosts();
  // }, []);

  function handleButtonClick() {
    fetchDataPosts();
  }

  return (
    <>
      <LanguageProvider>
        <LanguageSwitch />
      </LanguageProvider>

      
      <button onClick={handleButtonClick}> Push to get Posts</button>
      {!!posts.length && <PostListClick posts={posts} />}
    </>
  );
}

export default App;
