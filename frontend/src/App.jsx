import { useState } from 'react'
import './App.css'
function App() {
  const [city,setCity] = useState('');
  const [business,setBusiness] = useState('');

  let handleChange = (e)=>{
    //console.log(e.target.name);
    const { name, value } = e.target;
    if (name === "city") {
      setCity(value);
    }
    if (name === "business") {
      setBusiness(value);
    }
  }
  let getBusiness = ()=>{
    console.log(city);
    console.log(business);
    window.location.href = `/${city}/search?q=${business}`;


    //Lets call the api
    
  }
  return (
    <>
      <div className="row">
          <div className="col-3">
              <input name="city" onChange={handleChange} className="form-control form-control-sm" />
          </div>
          <div className="col-3">
              <input name="business" onChange={handleChange} className="form-control form-control-sm" />
          </div>
         <div className="col-1">
            <input type="submit" onClick={getBusiness} className="btn btn-sm btn-success" />
          </div> 
      </div>
    </>
  )
}

export default App
