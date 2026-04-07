export default function App(){
  let isLogin=true;
  return (
    <div>
      {isLogin ? <h1>Welcome</h1> : <h1>Please Login</h1>}
    </div>
  );
}
