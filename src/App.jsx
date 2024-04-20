import React from "react"
import Header from "./components/Header"
import Content from "./components/Content"
function App() {
  return (
    <div className="main w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="container md:max-w-xl  max-w-[90%] border shadow-xl p-5 rounded-md  bg-red-400 md:bg-inherit">
        <Header />
        <Content/>
      </div>
    </div>
  )
}
export default App
