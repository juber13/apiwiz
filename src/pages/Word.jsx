import React, { useEffect, useState } from 'react'
import Buttons from '../components/Buttons'

const Word = ({ isActive }) => {
    const [text, setText] = useState('')
    const [obj, setObject] = useState({})

    const fetchData = async () => {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
        const data = await res.json();

        if (data && data.length > 0) {
            const { partOfSpeech, definitions, antonyms, synonyms } = data[0].meanings[0];
            const definition = definitions[0].definition;
            setObject({
                partOfSpeech,
                antonym: antonyms[0],
                synonym: synonyms[0],
                definition
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    }

    return (
        <div className='mt-4'>
            <Buttons />
            <form className='grid grid-cols-2 items-center mt-3' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='Search Text' className={`text-sm p-2 rounded-md  px-8 w-[95%] outline-none md:max-w-2xl ${isActive && 'text-black'}`} />
                </div>
                <div>
                    <button className='border p-2 text-sm rounded-md text-gray-500' type='submit'>Search!</button>
                </div>
            </form>

            <div className={`result grid grid-rows-2 gap-2 rounded-md mt-3 ${!isActive ? 'bg-gray-200' : 'border border-gray-800'} p-2`}>
                <div className='grid grid-cols-2 text-sm'>
                    <span>Character</span>
                    <span>Word</span>
                </div>

                <div className='grid grid-cols-2 text-sm'>
                    <span>{text.split("").length}</span>
                    <span>{text !== "" ? text.split(" ").length : 0}</span>
                </div>
            </div>

            <div className={`footer grid grid-cols-2 rounded-md mt-4 ${!isActive ? 'bg-gray-200' : 'border border-gray-800'} p-2`}>
                <div className='flex flex-col text-sm font-700 gap-1'>
                    <span>Definition:</span>
                    <span>Parts of speech:</span>
                    <span>Synonyms:</span>
                    <span>Antonyms:</span>
                </div>

                <div className='flex flex-col text-sm gap-1'>
                    <span className=''>{obj.definition}</span>
                    <span>{obj.partOfSpeech}</span>
                    <span>{obj.synonym}</span>
                    <span>{obj.antonym}</span>
                </div>
            </div>

        </div>
    )
}

export default Word