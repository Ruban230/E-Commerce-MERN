
import { Box, CssBaseline } from '@mui/material';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './Components/Main';
import Men from './Components/Men';
import Women from './Components/Women';
import Newarrival from './Components/Newarrival';


function App() {
  return (
    <Router>
    <div className="App">
      <Box
      sx={{
        display: `flex`,
        flexDirection: `column`,
        minHeight:`100vh`
      }}
      >
        <CssBaseline/>
        <Header/>
        <Box component={`main`} sx={{flexGrow: 1 , p:3}}>
        <Routes>
  <Route path='/' element={<Main/>}/>
  <Route path='/men-arrival' element={<Men/>}/>
  <Route path='/women-arrival' element={<Women/>}/>
  <Route path='/arrival' element={<Newarrival/>}/>
</Routes>
        </Box>
        <Footer/>
      </Box>



    </div>
    </Router>
  );
}

export default App;
