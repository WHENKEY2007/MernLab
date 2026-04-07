import {useState} from "react";

export default function App(){
  const [task,setTask]=useState("");
  const [list,setList]=useState([]);

  return(
    <div>
      <input onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={()=>setList([...list,task])}>Add</button>

      <ul>
        {list.map((t,i)=><li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}
