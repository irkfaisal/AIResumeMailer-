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



{/* <div className="gradient__bg w-screen flex flex-wrap items-center justify-center" >
  <div className='heroBanner-content w-1/2'>
    <h1 className='gradient__text'>Automate your Job apply with AI</h1>
    <p>Save time, apply smarter and get hired faster. Use AI to create tailored emails for HR and recruiters in just a few clicks.</p>
  </div>
  <div
    className="heroBanner-image w-1/2 bg-transparent flex flex-1 justify-center items-center">
    <div
      className="h-[400px] w-[400px] bg-transparent flex justify-center items-center"
      style={{
        border: "2px solid white",
        borderRadius: "50%",
        boxShadow: "0 0 20px 10px rgba(255, 255, 255, 0.5)",
      }}
    >
      <img src={img4} className="h-60 w-60" alt="mail-logo" />
    </div>
  </div>
</div> */}
