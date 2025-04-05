import { useState } from "react";
import "./index.css";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subject, setSubject] = useState({
    english: false,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
        english: true,
        maths: false,
        physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
};


  const handleSubjectChange = (sub) => {
    setSubject((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  return (
    <div className="flex justify-center">
      <form>
      <div className="h-full w-200 border flex flex-col p-10">
        <label>First Name</label>
        <input
          className="border p-2"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          required
        ></input>

        <label className="mt-4">Last Name</label>
        <input
          className="border p-2"
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          required
        ></input>

        <label className="mt-4">Enter Email</label>
        <input
          className="border p-2"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />

        <label className="mt-4">Contact</label>
        <input
          className="border p-2"
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
          required
        />

        <label className="mt-5">Gender</label>
        <div className="mb-5">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            required
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            required
          />
          female
          <input
            type="radio"
            name="gender"
            value="others"
            checked={gender === "others"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            required
          />
          others
        </div>

        <label>Choose fav subjects</label>
        <div className="flex w-full justify-center">
          <input
            type="checkbox"
            checked={subject.english}
            onChange={(e) => handleSubjectChange("english")}
          />
          English
          <input
            type="checkbox"
            checked={subject.maths}
            onChange={(e) => handleSubjectChange("maths")}
          />
          Maths
          <input
            type="checkbox"
            checked={subject.physics}
            onChange={(e) => handleSubjectChange("physics")}
          />
          Physics
        </div>

        <label for="url" className="mt-4">Enter URL*</label>
        <input
          type="url"
          name="url"
          id="url"
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter url"
          required
        />

        <label className="mt-4">Select your choice</label>
        <select
          className="mt-4"
          name="select"
          id="select"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="" disabled selected={selectedOption === ""}>
            Select your Ans
          </option>
          <optgroup label="Beginers">
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">JavaScript</option>
          </optgroup>
          <optgroup label="Advance">
            <option value="4">React</option>
            <option value="5">Node</option>
            <option value="6">Express</option>
            <option value="t">MongoDB</option>
          </optgroup>
        </select>

        <label className="mt-4">About</label>
        <input
        type="textarea"
        className="p-3 h-20 rounded-2xl border"
        placeholder="About yourself"
        value={about}
        onChange={(e)=>{
          setAbout(e.target.value)
        }}
        required
         />

         <label className="m-5">Submit or Reset</label>
         <div className="flex justify-around">
          <input
          type="submit"
          value="Reset"
          className="bg-blue-600 w-50"
          onClick={()=>{
              handleReset()
          }}
          />
          <input 
          className="bg-green-500 w-50"
          value="submit"
          type="submit"
          onClick={(e)=>{
            handleSubmit(e)
          }} 
          />
         </div>
          
      </div>
      </form>
      
    </div>
  );
}

export default App;
