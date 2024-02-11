import { useEffect } from "react"
import { useRef } from "react"
import { useCallback } from "react"
import { useState } from "react"

function App() {

 let [length, setlength] = useState(8)
 const [numberAllowed, setNumnberAllowed] = useState(false)
 const [character, setCharacter] = useState(false)
 const [password, setpassword] = useState('')

 //useref    -> used for reference
 const passwordref = useRef(null)




//usecallback(fn , [])
const passwordgenerator = useCallback(()=> {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(character) str+= "!@#$%^&%$#*&`(*%$"

    for(let i = 1; i<= length; i++) {

      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setpassword(pass);


} , [length, numberAllowed, character, setpassword])

//copy password to clipboard
const copyPassword = useCallback(()=> {

  passwordref.current?.select()
  //passwordref.current?.setSelectionRange(0, 4);         //to select values in range
  window.navigator.clipboard.writeText(password)


}, [password])



//call the passwordgen when change in length, number, char , setpassword
useEffect(()=> {

  passwordgenerator();

}, [length, numberAllowed, character, setpassword])




  return (
    <>

        <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-8 my-8 text-orange-400 bg-gray-500 pb-5">
           
           <h1 className="text-white text-center text-2xl mb-2">Password Generator</h1>
           
            <div className="flex shadow-lg rounded-lg overflow-hidden ">
                  
                  <input 
                  type="text"
                  value={password}
                  className="outline-none w-full py-1 px-3 "
                  readOnly
                  ref={passwordref}
                  
                  />

                  <button 
                  className="bg-blue-600 rounded-lg mx-2 px-1 text-white"
                  onClick={copyPassword}
                  
                  >copy</button>
            </div>

              <div className="flex text-sm gap-x-2">


                <div className="flex items-center gap-x-1 mt-1">
                    <input 
                    type="range" 
                    min={6}
                    max={100}
                    value={length}
                    className="cursor-pointer"
                    onChange={(e)=>{setlength(e.target.value)}} //setlenght()
                    />

                    <label >Length : {length}</label>


                </div>

                <div className="flex items-center gap-x-1 mt-1">
                      <input 
                      type="checkbox" 
                      defaultChecked={numberAllowed}
                      id="numberInput"
                      onChange={()=>{
                        setNumnberAllowed((prev) => !prev)    //setNumberAllowed()
                      }}
                           
                      />

                      <label htmlFor="">Numbers</label>
                </div>

                <div className="flex items-center gap-x-1 mt-1">

                        <input 
                        type="checkbox" 
                        defaultChecked={character}
                        id="CharacterInput"
                        onChange={() => {
                          setCharacter((prev)=> !prev)    //setCharacter
                        }}
                        
                        
                        />

                        <label htmlFor="">Characters</label>

                </div>



              </div>

        </div>

    </>
  )
}

export default App
