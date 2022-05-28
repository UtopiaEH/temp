import React from 'react'

export const ToggleColumns = (props) => {

    const { columns, onCheckboxClick: checkBox } = props

    const onCheckboxClick = (e, column) => {
        checkBox({
            ...columns,
            [column]: e.target.checked
        })
    }

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
                                onChange={ (e) => onCheckboxClick(e, column) }
                                type='checkbox' />
                        </div>)
                })
            }
        </div>
    )
}
