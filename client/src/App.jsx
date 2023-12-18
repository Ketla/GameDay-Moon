import './App.css';
import { Route, Routes } from 'react-router-dom';
import { PlayerPage } from './pages/PlayerPage';
import { LoginPage } from './pages/LoginPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<PlayerPage />}
        />
        <Route path="login" element={<LoginPage />} />
      </Routes>

    </div>
  );
}

export default App;
