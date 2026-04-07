import {useState} from "react";

export default function App(){
  const [name,setName]=useState("");

  return(
    <input onChange={(e)=>setName(e.target.value)}/>
  );
}
