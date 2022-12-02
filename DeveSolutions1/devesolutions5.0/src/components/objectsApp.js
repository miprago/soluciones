import { useState } from "react";
import Objects from "./obejcts";

import '../styles/objetos.css';


export default function ObjectsApp() {
    const [etiqueta, setEtiqueta] = useState(' ');
    const [cuerpo, setCuerpo]= useState([]);
    const [precio, setPrecio] = useState('');

    function handleEnviar(e) {
        e.preventDefault();
        
        if (etiqueta === '' || precio === ''){
            alert("El campo no debe estar vacio");
        }
        else{
            const newObject = {
                id: crypto.randomUUID(),
                etiqueta: etiqueta,
                stock: false,
                precio: precio
            };
    
            const copia = [...cuerpo];
            copia.unshift(newObject)
            setCuerpo(copia);
            setEtiqueta('');
            setPrecio('');
            console.log(copia);
        }        

    };

    
    
    function handleCambio(e){
        const value= e.target.value;
        setEtiqueta(value);
    };
    function handleCambioPrecios(e){
        const value = e.target.value;
        setPrecio(value);
    }


    function handleActualizar(id, value, value2){
        if (value === ''){
            alert("El campo no puede estar vacio");           
        }
        else{
            const copia = [...cuerpo];
            const item = copia.find(item => item.id === id);
            item.etiqueta = value;
            item.etiqueta = value2;
            setCuerpo(copia);
           }
        
    };

    function handleEliminar(id){
        const copia  = cuerpo.filter(item => item.id !== id);
        setCuerpo(copia);
    };

    return (
        <div className='objContenedor'>
        <div className='objTitulos'>
            <span>Nombre del Auto</span>
            <span>Precio</span>
        </div>
            <form 
            className='objFormulario'
            onSubmit={handleEnviar}
            >
            
                <input
                    className='objInput'
                    onChange={handleCambio}
                    value={etiqueta}
                    
                />
                <input
                className='objInput'
                onChange={handleCambioPrecios}
                value={precio}
                />

                <input
                    //onClick={handleClic}
                    onClick={handleEnviar}
                    className='objBoton'
                    type="submit"
                    value="Crear Modelo"
                />
                

            </form>

            <div className="cuerpoContenedor">
                    {
                        cuerpo.map(item =>(
                            
                            <Objects
                            key={item.id}
                            item={item}
                            precio={precio}
                            actualizarDatos={handleActualizar}
                            onDelete={handleEliminar}
                            />
                        ))
                    }
            </div>


        </div>
    )
}