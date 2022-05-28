import React from 'react'

export const ToggleColumns = (props) => {

    const { columns, onCheckboxClick } = props

    return (
        <div className='toggle-columns'>
            {
                Object.keys(columns).map((column, index) => {
                    return (
                        <div key={ index }>
                            <label htmlFor={ column }>
                                { column }
                            </label>
                            <input
                                id={ column }
                                name={ column }
                                checked={columns[column]}
                                onChange={ (e) => onCheckboxClick(column, e.target.checked) }
                                type='checkbox' />
                        </div>)
                })
            }
        </div>
    )
}
