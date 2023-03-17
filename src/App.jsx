import { Route, Routes } from 'react-router-dom'
import './config.scss'
import { Home } from './pages/Home/Home';
import { Cardpage } from './pages/Card';
import Main from './pages';
import { Wishlist } from './pages/Wishlist/wishlist'
import { Admin } from './pages/Admin/Admin';
function App() {
  // document.addEventListener('contextmenu', (event) => {
  //   event.preventDefault()

  // });
  window.addEventListener('onsubmit', (e) => {
    e.preventDefault();
  })
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<Home />}></Route>
        <Route path='card' element={<Cardpage />}></Route>
        <Route path='wishlist' element={<Wishlist />}></Route>
        <Route path='dashboard' element={<Admin />}></Route>
        <Route path='*' element={<Home />}></Route>
      </Route>

    </Routes>
  );
}

export default App;
