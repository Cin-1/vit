
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
 <BrowserRouter>
        <Routes>
          <Route index path="/login" element={<div>login</div>} />
          <Route index path="/register/:token" element={<h1>ASFDsgdfgsrd</h1>} />
          {/**/}

        
          <Route path="*" element={<div>4025</div> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
