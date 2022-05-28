import React from 'react'

export const FilterForm = (props) => {

    const {onPriceInputChange: onChange, priceFrom, priceTo} = props

    const onPriceInputChange = (e) => {
        onChange({
            priceFrom: priceFrom ?? '',
            priceTo: priceTo ?? '',
            [e.target.id]: e.target.value || ''
        })
    }

    return (
        <div>
            <label htmlFor='priceFrom'>Price From:</label>
            <input
                type='number'
                id='priceFrom'
                name='priceFrom'
                value={ props.priceFrom }
                onChange={ onPriceInputChange}
                placeholder='Price from...' />
            <label htmlFor='priceTo'>Price To:</label>
            <input
                type='number'
                id='priceTo'
                name='priceTo'
                value={ props.priceTo }
                onChange={ onPriceInputChange }
                placeholder='Price to...' />
        </div>
    )
}
