import React, { useState } from "react"
import Header from "./components/Header"
import Paragraph from "./pages/Paragraph"
import Word from "./pages/Word";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [isActive, setIsActive] = useState(false);

  const activeDarkMode = () => {
    setIsActive(!isActive)
  }
  return (
    <BrowserRouter>

      <div className={`main w-full h-screen flex justify-center items-center ${isActive ? 'bg-black ' : "bg-gray-100"}`}>
        <div className={`container md:max-w-xl  max-w-[90%]  shadow-xl p-5 rounded-md  0 ${isActive ? 'bg-black border-2 broder border-gray-800 text-white' : "bg-gray-20"}`}>
          <Header isActive={isActive} setIsActive={setIsActive} activeDarkMode={activeDarkMode} />
           <Routes>
            <Route path="/" element={<Word  isActive={isActive}/>} />
            <Route path="/para" element={<Paragraph  isActive={isActive}/>} />
           </Routes>
          {/* <Content isActive={isActive} /> */}
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
