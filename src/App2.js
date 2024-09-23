// import logo from './logo.svg';
import './App.css';
// import Hello from './01/Hello'; //import Hello.js
import MyClock from './02/MyClock'; //import MyClock.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Hello /> 사용자정의태그 */}
        <MyClock /> 
      </header>
    </div>
  );
}

export default App;
