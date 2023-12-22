import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import MassMovies from './pages/MassMovies';
import MoviePage from './pages/MoviePage';
import TVShow from './pages/TVShow';
import Player from './pages/Player';



import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/signup' element={<SignUpPage/>}/>
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route exact path='/Player' element={<Player/>}/>
          <Route exact path='/tv' element={<TVShow/>}/>
          <Route exact path='/' element={<MassMovies/>}/>
          <Route exact path='/movie' element={<MoviePage/>}/>
        </Routes>
        <Header/>
     
    </BrowserRouter>
    
  );
}

export default App;
