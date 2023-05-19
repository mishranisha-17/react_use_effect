import './App.css'
import { useEffect,useState } from 'react'
import axios from 'axios'

function App(){
    const[val,setVal] = useState(0)
    const[price,setPrice] = useState(0)
    const[name,setName] = useState('Loding...')
    const[email,setEmail] = useState('Loding...')
    const[gender,setGender] = useState('Loding...')
    /*
    axios.get(url).than(res=>{})
    
    */
  // console.log('Hello')
  //useEffect(()=>{},[])-->syntex

  useEffect(
    ()=>{
        axios.get('http://randomuser.me/api/').then(res => {
            console.log(res.data.result[0])
            setName(res.data.result[0].name.first)
            setEmail(res.data.result[0].email)
            setGender(res.data.result[0],gender)

        })
    },)
    return(
        <div className = "App">
            count: {val}<br></br>
            <button onClick={() =>{setVal(val+1)}}>+</button>
            <br></br>
            Price: {price}
            <button onClick={() => {setPrice(price+1)}}> Price + </button>
            <br></br>
            Name: {name}<br></br>
            Email: {email}<br></br>
            Gender: {gender}<br></br>

        </div>
    )
  
}
export default App;