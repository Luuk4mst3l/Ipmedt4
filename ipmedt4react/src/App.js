import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [steden, setSteden] = useState([])

  useEffect(() => {
    async function getAllSteden() {
      try {
        const steden = await axios.get("http://127.0.0.1:8000/api/steden/")
        console.log(steden.data)
        setSteden(steden.data)

      } catch (error) {
        console.log(error)
      }
    }
    getAllSteden()
  }, [])

  return (
    <div className="App">
      <h1>Connect React JS with Laravel</h1>
      {
        steden.map((steden, i)=>{
          return (
            <h2 key={i}>{steden.name}</h2>
          )
        })
      }
    </div>
  );
}

export default App;
