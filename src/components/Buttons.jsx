import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = ({ isActive }) => {
    const currentPath = window.location.pathname;
    console.log(window.location)
    return (
        <>
            <div className="btn-fields md:max-w-sm  p-1 gap-1 md:gap-0  grid md:grid-cols-2">
                <Link to={"/"}>
                    <button className={`text-gray-600 p-1 px-4 bg-white w-[180px]  
                    rounded-md ${currentPath === "/" && 'shadow-xl'} text-xs  
                    ${isActive && 'bg-black'}`}>Word Input</button>
                </Link>

                <Link to={"/para"}>
                    <button className={`text-gray-600 p-1 px-4 w-[180px]  
                     bg-white border text-xs rounded-md ${currentPath === "/para" && 'shadow-xl'} 
                     ${isActive && 'bg-[#111827]'}`}>Paragraph</button>
                </Link>
            </div>
        </>
    )
}

export default Buttons