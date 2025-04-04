import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full rounded-lg px-4 my-8 bg-gray-700">
          <h1 className="text-white">Password Generator</h1>
        </div>
        <div className="h-100 w-200 bg-gray-500 rounded-lg">
          <input
            className="bg-white rounded-lg h-10 w-80 p-3 my-8"
            readOnly
            type="text"
            value={password}
            placeholder="password"
            ref={passwordRef}
          />

          <button
            onClick={() => {
              copyPasswordToClipBoard();
            }}
            className="h-10 bg-yellow-300 w-20 mx-5 rounded-lg"
          >
            Copy
          </button>

          <div className="bg-blue-100 flex justify-around">
            <div>
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                className="cursor-pointer"
              />
              <label>Length {length}</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label>Numbers</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="CharacterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
