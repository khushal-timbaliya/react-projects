import React, { useState } from 'react';

export default function Card() {
    const [count, setCount] = useState(0);
    const [inputNumber, setInputNumber] = useState(0);

    const increase = () => {
        setCount(count + Number(inputNumber)); // Convert input value to number
    };

    const reset = () =>{
        setCount(0)
    };

    const decrease = () =>{
        setCount(count - Number(inputNumber))
    };

    const input = (e) =>{
        setInputNumber(e.target.value)
    };

    return (
        <div>
            <div className="container w-[50%] h-[60vh] mt-[20vh] ms-[25%] bg-[#87CEEB] rounded-[30px] flex flex-col justify-center items-center">
                <h1 className='text-3xl text-white font-bold'>React Counter</h1>
                <div className="h-[100px] w-[100px] rounded-[10px] flex justify-center items-center text-5xl mt-3 border-4 border-white">
                        <p className='text-black'>{count}</p>
                        </div>    
                    <div className="p-5 flex flex-col justify-between">
                        <div className="flex flex-col">
                            <p className='text-black'>Enter number that you want to increase or decrease:</p>
                            <input
                                type="number"
                                className="inputNumber mt-2 border border-none ps-2 h-[45px] w-[400px] rounded-[5px]"
                                value={inputNumber}
                                onChange={input}
                                />

                            <button
                                className="reset text-[20px] border-4 border-white h-[45px] w-[400px] mt-5 rounded-[5px] flex justify-center items-center"
                                onClick={reset} 
                            >
                                Reset
                            </button>
                        </div>
                        <div>
                            <button
                                className="increase text-[20px] border-4 border-white h-[70px] w-[190px] mt-5 rounded-[5px]"
                                onClick={increase}
                            >
                                <p>{inputNumber}</p>
                                Add
                            </button>
                            <button
                                className="decrease text-[20px] border-4 border-white h-[70px] w-[190px] ms-[25px] mt-5 rounded-[5px]"
                                onClick={decrease} 
                            >
                                <p>{inputNumber}</p>

                                Subtract
                            </button>
                        </div>
                    </div>
                
            </div>
        </div>
    );
}
