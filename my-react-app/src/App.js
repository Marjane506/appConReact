import '../src/style.css';

import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import DiscoveryPage from './pages/DiscoveryPage';


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
