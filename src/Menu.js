import React from 'react'
// import PropTypes from 'prop-types'

const Menu=({items})=>{
    return (
        <main>
            {items.map((item)=>{
                return(
                <div key={item.id} className="card">
                    <img src={item.img}/>
                    <div classname="card-des">
                        <div className="card-head">
                            <span>{item.title}</span>
                            <span>{'$'+item.price}</span>
                        </div>
                        {item.desc}
                    </div>
                </div>
                )})}
        </main>
    )
}

export default Menu