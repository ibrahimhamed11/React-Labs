import React, { useState } from 'react'
import Card from '../Components/Card'

function Products() {
    return (
        <>
            <div className='row'>
                {
                    arr.map((item, index) => {
                        return <Card data={item} />
                    })
                }

            </div>
        </>
    )
}

export default Products