import React from "react"
import Header from "./components/Header"
import Content from "./components/Content"
function App() {
  return (
    <div className="main w-full h-screen flex justify-center items-center">
      <div className="container max-w-xl border shadow-md p-5 rounded-md">
        <Header />
        <Content/>
      </div>
    </div>
  )
}
export default App
