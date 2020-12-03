import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    // const handleAdd = () => {
    //     setCategories([
    //         ...categories,
    //         'One Piece'
    //     ]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
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
