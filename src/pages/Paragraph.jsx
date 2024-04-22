import React, { useEffect, useState } from 'react'
import Buttons from '../components/Buttons';
const Paragraph = ({ isActive }) => {
    const [text, setText] = useState("");
    const [counter, setCounter] = useState(0);

    const characterCounter = () => text.split("").filter(word => word !== "").length;

    const wordCounter = () => text.split(/\n| /).filter(word => (word.length > 0 && word !== " " && word !== "")).length;

    const sentenceCounter = () => text.split(/[,.?!] |\n/).filter(text => text !== '').length;

    const paraCounter = () => text.split("\n").filter(word => word !== " " && word !== "").length;

    const spaceCounter = () => text.split("").filter(word => word === " ").length;

    const Punctuations = () => {
        // regex to match punctuations
        const regex = /[,.?:;"'\-_]/g;
        const matches = text.match(regex) === null ? 0 : text.match(regex).length;
        return matches;
    };

    const handleText = (e) => {
        setText(e.target.value);
        characterCounter();
        wordCounter();
        spaceCounter();
        paraCounter();
        Punctuations();
        if (e.key === 'Enter') {
            setCounter(paraCounter());
        }
    }

    useEffect(() => {
        setCounter(paraCounter());
    }, [text])



    return (
        <div className='content mt-3 flex flex-col gap-3'>
            <Buttons />
            <div className="area-fiel">
                <textarea onKeyUp={handleText} rows="8"
                    className={`w-full outline-none resize-none  p-2  ${isActive && 'bg-[#111827] text-white font-bold'}`}></textarea>
            </div>

            <div className={`rounded-md shadow-md grid md:grid-cols-1 grid-cols-2`}>
                <div className={`text-xs grid md:grid-cols-6 grid-cols-1  p-2 ${isActive ? 'bg-[#111827]' : "bg-gray-200"}`}>
                    <div className='w-[70px]'>Characters</div>
                    <div className='w-[70px]'>Words</div>
                    <div className='w-[70px]'>Sentences</div>
                    <div className='w-[70px]'>Paragraph</div>
                    <div className='w-[70px]'>Space</div>
                    <div className='w-[70px]'>Punctuations</div>
                </div>

                <div className={`text-xs grid md:grid-cols-6 grid-cols-1  p-2 ${isActive ? 'bg-[#0d121d]' : "bg-gray-100"}`}>
                    <div className='w-[70px]'>{characterCounter()}</div>
                    <div className='w-[70px]'>{wordCounter()}</div>
                    <div className='w-[70px]'>{sentenceCounter()}</div>
                    <div className='w-[70px]'>{counter}</div>
                    <div className='w-[70px]'>{spaceCounter()}</div>
                    <div className='w-[70px]'>{Punctuations()}</div>
                </div>
            </div>
        </div>
    )
}

export default Paragraph