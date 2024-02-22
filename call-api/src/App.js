import './App.css';
import { datafetch } from './api';
import { useEffect, useState } from 'react';
import PostCard from './Components/PostCard';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    datafetch().then((posts) => {
      setData(posts);
    });
  }, []);

  return (
    <div className="App">
      {data ? (
        <ul>
          {
            data.map((item) => (
            <PostCard title={item.title} body={item.body}/>
          ))}
        </ul>
      ) : (
        <p>Data not available</p>
      )}
    </div>
  );
}

export default App;
