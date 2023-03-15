import { Route, Routes } from 'react-router-dom'
import './config.scss'
import { Home } from './pages/Home/Home';
import Main from './pages';
function App() {
  // document.addEventListener('contextmenu', (event) => {
  //   event.preventDefault()

  // });
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
