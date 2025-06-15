import React, { useCallback, useEffect, useRef, useState } from "react"

function App() {

  const [length, setLength ] = useState(7);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordref = useRef(null)

  // password generator code
  const passwordGenerator = useCallback(() =>{
    let pass ="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "`!@#$%^&*(){}[]|:;"

    for (let i = 1; i <= length; i++){
      let char1 = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char1); 

    }
    setPassword(pass)
  }, 
  [length, numAllowed, charAllowed, setPassword])
 
  useEffect(() => {
    passwordGenerator()
  },[length, numAllowed, charAllowed, passwordGenerator])
 

  // password copy

  const copyToclipboard = useCallback(() =>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)}
    ,[password])


  return (
    <>
     
      <div className="w-full max-w-md mx-auto bg-gray-600 px-4 py-3 my-8 shadow-md text-white my-8  rounded-lg ">
         <h1 className='text-white text-center text-semibold my-3 '>Password Generator</h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <input type="text" 
          value={password}
          className="outline-none w-full py-1 px-3 bg-white text-black"
          placeholder="Password"
          ref={passwordref}
          readOnly
          />
          <button onClick={copyToclipboard} className="outline-none bg-blue-700 px-3 py-0.5 shrink-0 text-semibold text-md cursor-pointer">copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
                <input type="range"
                min={6}
                max={60}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)} />
                <label className="text-yellow-400" htmlFor="">Length: {length} </label>
                
            </div>
            <div className="flex items-center gap-x-1">
                <input type="checkbox" 
                defaultChecked={numAllowed}
                id="numberInput"
                onChange={() =>{
                  setNumAllowed((prev) => !prev);
                }}/>
                <label className="text-yellow-400" htmlFor="numberInput">Number</label>
            </div>
             <div className="flex items-center gap-x-1">
                <input type="checkbox" 
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() =>{
                  setCharAllowed((prev) => !prev);
                }}/>
                <label className="text-yellow-400" htmlFor="charInput">Character</label>
            </div>
        </div>
      </div>

    </>
  )
}

export default App
