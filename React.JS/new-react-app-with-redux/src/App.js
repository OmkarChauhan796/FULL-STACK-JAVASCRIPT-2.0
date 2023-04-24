import React, { useState } from 'react'

import { increment, decrement, incerementByValue } from "./features/counter/counterSlice";

import { useSelector, useDispatch } from "react-redux";

function App() {

  const [input, setInput] = useState("")
  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch();

  return (
    <div
    className="bg-zinc-900 text-zinc-100 flex justify-center item-center flex-col min-h-screen gap-6"
    >
      <div className = "space-x-3">
      <input type="number"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 tarnsition-colors duration-200 ease-in-out" 
      placeholder="Enter a number..." 
      value={input}
      onChange={(e) => setInput(e.target.value)}/>
      <button
      onClick={() => dispatch(incerementByValue(Number(input)))}
      className = "text-white bg-indigo-500 border-0 py-2 px-6
      focus:outline-none hover:bg-indigo-600 rounded text-lg">
       Increment by Value
      </button>
      </div>
    </div>
  )
}

export default App;