import { useEffect ,useState} from 'react';
import './App.css';

import {Route, Routes,NavLink} from 'react-router-dom';

const Home =()=>{
  return(
    <li>
    Hello I am from Home Component
  </li>
  )
}



const NewRoute=()=>{
  return (
    <li>
      New Router Created
    </li>
  )
}


const DataFetch = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const outputData = await response.json();
        setPost(outputData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  return (
    <>
      {post.length > 0 ? (
        <ul>
          {post.map(item => (
           <NavLink to={'/printrout/${post.id}'}>
           <li key={item.id}>{item.title}</li>
           </NavLink>
          ))}
        </ul>
      ) : (
        <h1>Data Coming</h1>
      )}
    </>
    




  );
};


const PrintRout =()=>{
  <div>
    Hogo Ek din jarur hoga
  </div>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newroute" element={<NewRoute />} />
      <Route path="/fetchdata" element={<DataFetch />} />
      <Route path='printrout' element={<PrintRout/>}/>
    </Routes>
  );
}

export default App;
