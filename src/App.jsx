import React from "react"
import Header from "./components/Header"
import Content from "./components/Content"
function App() {
  return (
    <div className="main w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="container max-w-xl border shadow-xl p-5 rounded-md  bg-white">
        <Header />
        <Content/>
      </div>
    </div>
  )
}
export default App
