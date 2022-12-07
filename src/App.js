import './App.css';
import React, {useState} from "react";
import EntryCard from './Components/EntryCard';
const CLIENT_ID="b01669ce06464e06ad1afe9c395c7c15";
const CLIENT_SECRET="c7e50afc03dc417ca2181cf3d81664ff";
function App() {
  const[searchInput, setSearchInput] = useState("");
  const[accessToken, setAccessToken] = useState("");
  const [title, setTitle] = useState("Crenvy");

  const [blogEntrys, setBlogEntrys] = useState([])

  const[entry, setEntry] = useState({});



  const changeHandler = event =>{//Le entrega lo del formulario al objeto que mostramos
    const value = event.target.value; //Se guarda lo que escribimos en el input
    const property = event.target.name;
    setEntry({...entry, [property]:value});
  }

  const saveHandler = () =>{ //Guarda en blogEntrys la nueva entry ingresada
    setBlogEntrys([...blogEntrys, entry])
  }

  return (
    <div>
      <div className="App">
      <h1>{title}</h1>
      <div className='main-wrapper'>
        <div className='form-wrapper'>
          <form action=''>
            <div className='form-group'>
              <label htmlFor=''>¿Como te llamas?</label>
              <input type='text' name='entryTitle' onChange={changeHandler}/>
            </div>
            <div className='form-group'>
              <label htmlFor=''>Imagen</label>
              <input type='text' name='picture' onChange={changeHandler}/>
            </div>
            <div className='form-group'>
              <label htmlFor=''>¿Que estas escuchando?</label>
              <input type='text' name='content' onChange={changeHandler}/>
            </div>
            <div className='form-group'>
              <label htmlFor=''>Estado de animo</label>
              <select name='animo' onChange={changeHandler}>
                <option>Feliz</option>
                <option>Triste</option>
                <option>Indiferente</option>
              </select>
            </div>
          </form>
          <button type='button' onClick={saveHandler}>Crenvyar</button>
        </div>
        <div className='entries-wrapper'>
          {
            blogEntrys.map((entry, index) => <EntryCard entryData = {entry}/>)//Mapea las entradas y devuelve entryCard, cada objeto le llamamos entry
          }
        </div>
      </div>
    </div>
    </div>   
  );
}

export default App;
