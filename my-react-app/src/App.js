import '../src/style.css';

import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutPage from './components/AboutPage';
import DiscoveryPage from './components/DiscoveryPage';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'element={<Homepage/>} />
    <Route path='/about'element={<AboutPage/>} />
    <Route path='/discovery' element={<DiscoveryPage/>} />
  </Routes>
    </BrowserRouter>
  );
}
