function Child(props){
  return <h2>{props.data}</h2>;
}

export default function App(){
  return <Child data="Hello from Parent"/>;
}
