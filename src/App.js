// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">Greetings Page</header>
      <Routes>
        <Route
          path="/"
          element={<Greeting />}
        />
      </Routes>
    </div>
  );
}

export default App;
