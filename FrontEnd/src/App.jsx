import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Dashboard, Home } from './pages'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
