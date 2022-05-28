import React, { useEffect, useState } from 'react'

import '../styles/Search.css'
import { ToggleColumns } from './ToggleColumns'
import { ProductList } from './ProductList'
import { FilterForm } from './FilterForm'

export const Search = (props) => {
    const initial_products = props.products

    const [ products, setProducts ] = useState(initial_products)

    const [ price, setPrice ] = useState({ priceFrom: '', priceTo: '' })

    const [ columns, setColumns ] = useState({
        id: true,
        name: true,
        department: true,
        price: true,
        currency: true
    })



    const onPriceInputChange = (name, value) => {
        setPrice({
            ...price,
            [name]: value
        })
    }

    const onCheckboxClick = (name, checked) => {
        setColumns({
            ...columns,
            [name]: checked
        })
    }



    const filterProducts = () => {

        if (price.priceFrom !== '' && price.priceTo !== '') {
            const filtered_products = initial_products.filter((product) => {
                if (parseFloat(product.price) >= parseFloat(price.priceFrom) && parseFloat(product.price) <= parseFloat(price.priceTo)) {
                    return true
                }

                return false
            })
            setProducts(filtered_products)
        } else {
            setProducts(initial_products)
        }

    }

    useEffect(() => {
        filterProducts()
    }, [ price.priceFrom, price.priceTo ])


    return (
        <div className='Products'>
            <FilterForm
                priceFrom={ price.priceFrom }
                priceTo={ price.priceTo }
                onPriceInputChange={ onPriceInputChange } />

            <ToggleColumns
                onCheckboxClick={ onCheckboxClick }
                columns={ columns } />

            <ProductList
                products={ products }
                columns={ columns } />
        </div>
    )
}

export default Search
