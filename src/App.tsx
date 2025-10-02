import { Footer, MainMenu } from './components';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <MainMenu />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
