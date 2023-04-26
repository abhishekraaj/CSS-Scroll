import React,{ useEffect , useState} from "react";
import "./style.css";

export default function App() {

  const [ users , setUsers] = useState([])
  const getData = ()=>{
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(data=>setUsers(data.users))
    .catch((err)=>console.log(err))
  }
 useEffect(()=>{
  getData()
 },[])
 console.log(users)
  return (
 
     <div className="card">
       {
         users.map((user)=>{
         return <div className="card_container" key={user.id}>
           <img width="150rem" src={user.image} />
           <h3>{user.firstName} {user.lastName}</h3>
           <p >{user.company.title} @ {user.company.name}</p>
           <p id="year">{String(user.age).slice(0,1)} Yrs Exp.</p>
         </div>})
       }
     </div>

  );
}
