export default function App(){
  let items=["HTML","CSS","JS"];

  return (
    <ul>
      {items.map((i,index)=>(
        <li key={index}>{i}</li>
      ))}
    </ul>
  );
}
