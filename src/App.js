import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
        <button className='counter' onClick={() => setCount(count + 1)}>+</button>
        <button className='counter' onClick={() => setCount(count - 1)}>-</button>
       </div>

       <h2>{count}</h2>

      </header>
    </div>
  );
}

export default App;