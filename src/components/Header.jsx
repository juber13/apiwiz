import React from "react"

const Header = () => {
    return (
        <div className="flex items-start">
            <div>
                <h1 className="text-2xl font-800 mb-3">Text Analyzer</h1>
                <p className="text-sm">Text Analyzer is a simple free online tool for SEO web content analysis that helps you find most frequent phrases and words, number of characters, words, sentences and paragraphs, and estimated read and speak time of your content.
                </p>
            </div>

            <div className="">
                <div className="dark-mode w-[40px] h-[20px] bg-gray-300 rounded-full relative">
                    <div className="toggle absolute w-[15px]  rounded-full ml-1 h-[15px] mt-[3px]  bg-gray-600"></div>
                </div>
            </div>
        </div>
    )
}

export default Header