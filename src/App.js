import './App.css';
import Header from './Components/Header/Header';
import RecommendedVideo from './Components/RecommendedVideo/RecommendedVideo';
import Sidebar from './Components/Sidebar/Sidebar';
import { Switch, Route} from "react-router-dom"
import SearchPage from './Components/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <Header/>
  
        <Switch>
          <Route path='/search/:searchTerm'>
          <div className='app_page'>
            <Sidebar/>
            <SearchPage/>
          </div>
          </Route>
          <Route path='/'>
          <div className='app_page'>
            <Sidebar/>
            <RecommendedVideo/>
          </div>
          </Route>
        </Switch>
  
    </div>
  );
}

export default App;
