// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            path="/"
            element={<Greeting />}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
