import Banner from "./component/Banner/Banner";
import NavBar from "./component/NavBar";
import RowPost from "./component/RowPost/RowPost";
import './App.css'
import {originals,trending} from './url'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={trending} title='Trending' isSmall />
      
    </div>
  );
}

export default App;
