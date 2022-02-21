import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function GifExpertApp() {

    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    const initialState = ['One Punch'];

    const [categories, setCategories] = useState(initialState)

    // const handleAdd = () =>{
    //     const newItem = 'HunterX';
    //     setCategories([...categories,newItem]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr/>

            <ul>
                {
                    categories.map(category=> <GifGrid key={category} category={category}></GifGrid>)
                }
            </ul>
        </>
    )
}

export default GifExpertApp