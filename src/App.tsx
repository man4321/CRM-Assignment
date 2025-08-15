
import { JSX } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard';
import { AppProvider } from './store/appContext';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App