import React from 'react'

export const FilterForm = (props) => {

    const {onPriceInputChange: onChange, priceFrom, priceTo} = props

    const onPriceInputChange = (e) => {
        onChange(e.target.id, +e.target.value )
    }

    return (
        <div>
            <label htmlFor='priceFrom'>Price From:</label>
            <input
                type='number'
                id='priceFrom'
                name='priceFrom'
                value={ priceFrom }
                onChange={ onPriceInputChange}
                placeholder='Price from...' />
            <label htmlFor='priceTo'>Price To:</label>
            <input
                type='number'
                id='priceTo'
                name='priceTo'
                value={ priceTo }
                onChange={ onPriceInputChange }
                placeholder='Price to...' />
        </div>
    )
}
