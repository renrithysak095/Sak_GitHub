import "./App.css";
import "flowbite";
import { useState, useEffect } from "react";
import Table from "./Components/Table";
import axios from "axios";
// import baseURL = http://8.219.139.67:8787/api/;

function App() {

  // //Normal Fetch
  const [value, setValue] = useState([]);
  // useEffect(()=>{
  //     fetch('http://8.219.139.67:8787/api/v1/users?page=1&size=5')
  //     .then((data) => data.json())
  //     .then((getting) => setValue(getting.payload))
  // },[]) 

  //Using Axios
  const getAll = async () => {
    const response = await axios.get(
      'http://8.219.139.67:8787/api/v1/users?page=1&size=5'
    )
    const {payload} = response.data
    setValue(payload)
  }
  useEffect(()=> {
      getAll();
  },[])
  return (
    <div className="w-3/4 h-full absolute left-10 top-10">
        <Table myData = {value}/>
    </div>
  );
}

export default App;
