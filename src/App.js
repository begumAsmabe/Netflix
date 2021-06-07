import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { action, originals } from './Urls'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={originals} />
      <RowPost title='Action' isSmall url={action}/>
      
      

    </div>
  );
}

export default App;
