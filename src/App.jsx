import React , {useState} from "react"
import Header from "./components/Header"
import Content from "./components/Content"
function App() {
  const [isActive , setIsActive] = useState(false);

  const  activeDarkMode  = () => {
      setIsActive(!isActive)
  }
  return (
    <div className={`main w-full h-screen flex justify-center items-center bg-gray-100 ${isActive && 'bg-[#111827]'}`}>
      <div className={`container md:max-w-xl  max-w-[90%]  shadow-xl p-5 rounded-md  bg-gray-200 ${isActive && 'bg-black text-white'}`}>
        <Header  isActive={isActive} setIsActive={setIsActive} activeDarkMode={activeDarkMode}/>
        <Content isActive={isActive}/>
      </div>
    </div>
  )
}
export default App
