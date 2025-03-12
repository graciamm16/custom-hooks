import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    
    //Función que permite hacer el cambio de cualquier input
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
        // console.log({name, value});
    };

    //Función para borrar datos haciendo click en el botón
    const onResetForm = () => {
        setFormState(initialForm);
    };

    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}