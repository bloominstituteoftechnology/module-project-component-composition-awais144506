import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
function App() {
  const API_KEY = "DEMO_KEY"
  const [apod,setApod] = useState(null)

  useEffect(()=>{
    axios.get(
      `http://localhost:9009/api/apod?api_key=${API_KEY}`
    )
    .then(res=>setApod(res.data))
    .catch(err=>console.log(err))
  },[])
console.log(apod)
 if(!apod) return "Fetching Data Man Wait Outside Please...."
  return (
    <div>  
          <Card title={apod.title} explanation={apod.explanation} date={apod.date} imageUrl={apod.url}/>
    </div>
  )
}

export default App
