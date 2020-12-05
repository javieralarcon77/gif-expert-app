import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState( defaultCategories );

    // const handleAdd = () => {
    //     setCategories([
    //         ...categories,
    //         'One Piece'
    //     ]);
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory 
                setCategories={ setCategories }
            />
            <hr />
            {/* <button onClick={ handleAdd } >Agregar</button> */}
            <ol>
                { 
                    categories.map( (cat) => 
                        <GifGrid 
                            key={ cat } 
                            category={ cat } 
                        />
                    )
                }
            </ol>
        </>
    )
}
