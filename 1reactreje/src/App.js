import logo from"./logo.svg"
import"./style.css"
import test from"./test"

function App() {
  return (
  
   <div className='app'>
    <h3>{process.env.NODE_ENV}</h3>
    <img src="/logo192.png" alt=""></img>

    <img src={logo} alt=""></img>

   </div>

  );
}

export default App;
