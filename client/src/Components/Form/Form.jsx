import React, { useState } from 'react';

import Navbar from "../Navbar/navbar.jsx"
import "./Form.css"
import { useDispatch} from "react-redux"
import {createPokemon} from "../../Actions/actions.js"
import { useHistory} from "react-router-dom"

function Form() {
   
    let arr = []

    const dispatch = useDispatch()

    const [form, setForm] = useState({
        nombre: "",
        hp: "",
        ataque: "",
        defensa: "",
        velocidad: "",
        altura: "",
        peso: "",
        tipos: []
       

    })

    const Allchecked =() => {
        const checks = document.querySelectorAll(".check")
        checks.forEach(e => {
            if(e.checked === true){
                arr.push(e.id)
           
             }
       });
    }
   
   const handleChange = (e) => {
       setForm({
        ...form,
        [e.target.name]: e.target.value,
        tipos: arr
       
    })
        buttonActive()
        Allchecked() 
   }

   const history = useHistory()




    const handleSubmit = (e) => {
    dispatch(createPokemon(form))
    e.preventDefault()
    history.push("/form/pokemoncreated")
    
    }
      
    const buttonActive = () => {
        if(form.nombre === ""){
            document.getElementById("btn_submit").disabled= true   
        }
        else 
        document.getElementById("btn_submit").disabled= false
    }
   
   
   
    
  
   
    
return (
    <div>
        <Navbar/>
        <form className="form" onSubmit={handleSubmit}>
            <h2>Crea tu propio pokemon!</h2>
            <div>
            
                <input name="nombre"  type="text" placeholder="Nombre..." autoComplete="off" onChange={handleChange}/>
            </div>
            <div>  
                <input name="hp"  type="number" placeholder="Hp..." onChange={handleChange}/>
            </div>
            <div>
                <input name="ataque"  type="number" placeholder="Ataque..."onChange={handleChange}/>
            </div>
            <div>
            <input name="defensa"  type="number" placeholder="Defensa..."onChange={handleChange}/>
            </div>
            <div>
                <input name="velocidad"  type="number" placeholder="Velocidad..."onChange={handleChange}/>
            </div>
            <div>
                <input name="altura"  type="number" placeholder="Altura..."onChange={handleChange}/>
            </div>
            <div>
                <input name="peso"  type="number" placeholder="Peso..."onChange={handleChange}/>
            </div>
            <hr />
            <p>Types</p>
            
        <div className="container">
        <div>
                <label htmlFor="normal">
                    <input id="normal" type="checkbox" className="check" onChange={handleChange}/>
                    <span>Normal</span>
                </label>
        </div>
        <div>
                <label htmlFor="fighting">
                    <input id="fighting"  type="checkbox" className="check" onChange={handleChange}/>
                    <span>Fighting</span>
                </label>
            </div>
            <div>
                <label htmlFor="flying ">
                    <input id="flying " type="checkbox" className="check" onChange={handleChange}/>
                    <span>Flying</span>
                 </label>
            </div>
            <div>
                <label htmlFor="poison">
                    <input id="poison" type="checkbox" className="check" onChange={handleChange}/>
                    <span>Poison</span>
                </label>
            </div>
            <div>
                <label htmlFor="ground">
                <input id="ground" type="checkbox" className="check" onChange={handleChange}/>
                <span>Ground</span>
                </label>
            </div>
            <div>
                <label htmlFor="rock ">
                    <input id="rock " type="checkbox" className="check" onChange={handleChange}/>
                    <span>Rock</span>
                </label>
            </div>
            <div>
                <label htmlFor="bug">
                <input id="bug" type="checkbox" className="check" onChange={handleChange}/>
                  <span>Bug</span>
                </label>
            </div>
            <div>
                <label htmlFor="ghost">
                <input id="ghost" type="checkbox" className="check" onChange={handleChange}/>
                <span>Ghost</span>
                </label>
            </div>
            <div>
                <label htmlFor="steel">
                <input id="steel" type="checkbox" className="check" onChange={handleChange}/>
                    <span>Steel</span>
                </label>
            </div>
            <div>
                <label htmlFor="fire">
                <input id="fire" type="checkbox" className="check" onChange={handleChange}/>
                <span>Fire</span>
                </label>
            </div>
            <div>
                <label htmlFor="water">
                <input id="water" type="checkbox" className="check" onChange={handleChange}/>
                <span>Water</span>
                </label>
            </div>
            <div>
                <label htmlFor="grass">
                <input id="grass" type="checkbox" className="check" onChange={handleChange}/>
                <span>Grass</span>
                </label>
            </div>
            <div>
                <label htmlFor="electric">
                <input id="electric" type="checkbox" className="check" onChange={handleChange}/>
                <span>Electric</span>
                </label>
            </div>
            <div>
                <label htmlFor="psychic">
                <input id="psychic" type="checkbox" className="check" onChange={handleChange}/>
                    <span>Psychic</span>
                </label>
                    
            </div>
            <div>
                <label htmlFor="ice">
                <input id="ice" type="checkbox" className="check" onChange={handleChange}/>
                <span>Ice</span>
                </label>
            </div>
            <div>
                <label htmlFor="dragon ">
                <input id="dragon " type="checkbox" className="check" onChange={handleChange}/>
                    <span>Dragon</span>
                     </label>
            </div>
            <div>
                <label htmlFor="dark ">
                    <input id="dark " type="checkbox" className="check" onChange={handleChange}/>
                    <span>Dark</span>
                </label>
            </div>
            <div>
                <label htmlFor="fairy">
                <input id="fairy" type="checkbox" className="check" onChange={handleChange}/>
                    <span>Fairy</span>
                </label>
            </div>
            <div>
                <label htmlFor="unknown">
                <input id="unknown" type="checkbox" className="check" onChange={handleChange}/>
                <span>Unknown</span>
                </label>
            </div>
            <div>
                <label htmlFor="shadow">
                    <input id="shadow" type="checkbox" className="check" onChange={handleChange}/>
                    <span>Shadow</span>
                </label>
            </div>
        </div>
        <br />
            
            <button disabled className={form.nombre === ""? "btn_desactive": "btn_active"} id="btn_submit" onClick={handleSubmit}> Crear </button>

            
        </form>
    </div>
)
}

export default Form