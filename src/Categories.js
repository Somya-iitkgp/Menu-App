import React from 'react'


function click(number){
    console.log(number)
}
const Categories=({filterItems,categories,items})=>{
    
    return (
        <main>
            {categories.map((category)=>{
                return(
                <button onClick={()=>filterItems(category)}>{category}</button>
                )
            })}
        </main>
    )
}

export default Categories