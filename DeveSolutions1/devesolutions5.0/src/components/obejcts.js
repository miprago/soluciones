import { useState } from "react"

export default function Objects({item, actualizarDatos, onDelete}){


    const [isEdit, setIsEdit] = useState(false);

    function FormEdit(){
        const [newValue, setNewValue]= useState(item.etiqueta);
        const [newPrecio, setNewPrecio] = useState(item.precio);

        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){
            const value = e.target.value;
            setNewValue(value);
        }

        function handleChangePrecio(e){
            const value = e.target.value;
            setNewPrecio(value);
        }

        function handleClickActualizarObjeto(){
            actualizarDatos(item.id, newValue, newPrecio);
            setIsEdit(false);
        }



        return(
            <form className='objActualizarForm' onSubmit={handleSubmit}>
                <input
                type='text'
                className='objInput'
                onChange={handleChange}
                value= {newValue}                
                />

                 <input
                 type='text'
                 className='objInput'
                 onChange={handleChangePrecio}
                 value= {newPrecio}  
                 />   


                <button
                className='objBotonEditar'
                onClick={handleClickActualizarObjeto}
                >Actualizar</button>

            </form>
        );
    }

    function ObjetosIndividuales(){
        return (
            <div className='ObjetosInfo'>
                <span className='objEtiqueta'>{item.etiqueta}</span>
                <span className='objEtiqueta'>{item.precio}</span>
                <button className='botonActualizar' onClick={()=> setIsEdit(true)}>Editar</button>
                <button className='botonEliminar' onClick={()=> onDelete(item.id)}>Eliminar</button>
            </div>
        );
    };






    return(
        <div className='objObjects'>
        {isEdit ? <FormEdit/> : <ObjetosIndividuales/>}
        </div>                
    );
}