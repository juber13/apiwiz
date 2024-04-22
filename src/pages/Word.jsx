import React, { useEffect, useState } from 'react'
import Buttons from '../components/Buttons'

const Word = ({ isActive }) => {
    const [text, setText] = useState('')
    const [obj, setObject] = useState({})

    const fetchData = async (e) => {
        e.preventDefault();

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

    useEffect(() => {
        fetchData();
    }, [text]);

    return (
        <div className='mt-4'>
            <Buttons />
            <form className='grid grid-cols-2 items-center mt-3' onSubmit={fetchData}>
                <div className='form-controll'>
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='Search Text' className={`text-sm p-2 rounded-md  px-6 outline-none max-w-2xl ${isActive && 'text-black'}`} />
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
                    <span className=''>{obj.definition || "Not defined"}</span>
                    <span>{obj.partOfSpeech || "Not defined"}</span>
                    <span>{obj.synonym || "Not defined"}</span>
                    <span>{obj.antonym || "Not defined"}</span>
                </div>
            </div>

        </div>
    )
}

export default Word