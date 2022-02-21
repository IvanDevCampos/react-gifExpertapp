import { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleImputChange = (e)=>{
        // console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length >2 ){
            setCategories(categories => [inputValue,...categories])
            console.log('Submit Hecho')
            return
        }

        alert('Elemento No Valido');
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange={handleImputChange}

            >
            </input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.any.isRequired
}



