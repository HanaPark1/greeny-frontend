import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Router,
  useLocation,
  Routes,
  useNavigate,
} from 'react-router-dom';
//styles
import styled from 'styled-components';
import * as tokens from './APP/tokens';

//Main components
import TopNav from './APP/TopNav/TopNav.main';
import Home from './APP/Home/Home.main';
import Mypage from './APP/Home/Pages/Mypage1';
import Likepage from './APP/Home/Pages/Likepage1';

function App() {
  const MainScreen = styled.div`
    position: absolute;
    top: 100px;
    width: 100vw;
    min-height: 100vh;
    height: fit-content;

    // background-color: ${tokens.colors.grey_100};
    z-index: 50;
  `;
  return (
    <div className='App'>
      <TopNav></TopNav>
      <Likepage></Likepage>
    </div>
  );
}

export default App;
