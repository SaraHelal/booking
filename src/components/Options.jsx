import React from 'react'

export const Options = ({options, handleOptions}) => {
  return (
    <div>
        <div className="options" onClick={(e)=>e.stopPropagation()}>
            <div className="optionItem">
                <span>Adults</span>
                <div className="count">
                    <button disabled={options.adult <= 1} onClick={()=>handleOptions('adult','d')}>-</button>
                    <span>{options.adult}</span>
                    <button onClick={()=>handleOptions('adult','i')}>+</button>
                </div>
            </div>

            <div className="optionItem">
                <span>Children</span>
                <div className="count">
                    <button disabled={options.children <= 0} onClick={()=>handleOptions('children', 'd')}>-</button>
                    <span>{options.children}</span>
                    <button onClick={()=>handleOptions('children', 'i')}>+</button>
                </div>
            </div>

            <div className="optionItem">
                <span>Rooms</span>
                <div className="count">
                    <button disabled={options.room <= 1} onClick={()=>handleOptions('room', 'd')}>-</button>
                    <span>{options.room}</span>
                    <button onClick={()=>handleOptions('room', 'i')}>+</button>
                </div>
            </div>
        </div>
    </div>
  )
}
