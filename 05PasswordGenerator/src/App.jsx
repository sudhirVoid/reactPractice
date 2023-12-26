import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberSelected, setNumberSelected] = useState(false);
  const [characterSelected, setCharacterSelected] = useState(false);
  const [password, setPassword] = useState("");

  // useCallback to optimize the repetative call of the function by caching.
  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberSelected) str += "0123456789"
    if(characterSelected) str += "!@#$%^&*()>?M:{}[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)


  }, [length, numberSelected, characterSelected, setPassword])//here setPassword can be given or not its just for optimization.

  const copyPasswordToClipboard = useCallback(()=>{
    // window.navigator.clipboard.writeText(password)
    //but to optimize the above line we can use useRef.
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    //useRef gives user experience that input field is highlighed in this case.

    //not only this we can even give feel of select range 
    /*
    *
    *
    passwordRef.current?.setSelectionRange(0,33);
    *
    *
    */
  },[password])
  // this is to run a function when something is changed in defined variables.
  useEffect(()=>{
    passwordGenerator()
  },[length, numberSelected, characterSelected, passwordGenerator])

  //use Ref hook
  const passwordRef = useRef(null)
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
       
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClipboard}
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          id="numberInput"
          onChange={()=>{
            setNumberSelected((prev) => !prev)
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              id="characterInput"
              onChange={()=>{
            setCharacterSelected((prev) => !prev)
          }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    </>
  )
}

export default App
