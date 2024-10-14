import './App.css'
import { img4 } from './assets'

function App() {

  return (
    <>
      <div className="gradient__bg w-screen flex flex-wrap items-center justify-center" >
        <div
          className="h-[500px] w-[500px] bg-transparent flex justify-center items-center"
          style={{
            border: "2px solid white",
            borderRadius: "50%",
            boxShadow: "0 0 20px 10px rgba(255, 255, 255, 0.13)",
          }}
        >
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
        <h1 className="gradient__text text-4xl font-bold">Welcome to Your AI App</h1>
      </div>

    </>
  )
}

export default App
