import { BrowserRouter, Routes, Route } from 'react-router-dom'

//page & Components
import Home from './pages/Home'
import Navbar from './Components/Navbar';
import SingleWorkout from './Components/SingleWorkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route path='/:id' element={<SingleWorkout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
