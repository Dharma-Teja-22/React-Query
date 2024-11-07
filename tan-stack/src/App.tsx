// import { useEffect, useState } from 'react'
// import axios from 'axios'

import Todos from "./components/Todos"

function App() {
  // const [data, setData] = useState([]);
  // useEffect(()=>{
  //   axios.get("http://localhost:8080/todos")
  //   .then((res)=>{
  //     setData(res.data);
  //   })
  //   .catch((err)=>{
  //     console.log("Error : ", err);
  //   })
  // },[])

  // {JSON.stringify(data)}

  return (
    <>
      <Todos/>
    </>
  )
}

export default App
