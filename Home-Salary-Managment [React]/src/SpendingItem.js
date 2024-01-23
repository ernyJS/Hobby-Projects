import { useState } from "react"
export default function SpendingItem({item, handleRemoveItem}){
    return <li className="spending-item">
        <div className="spending-item-name">
            <p>{item.name}</p>
        </div>
        <div className="spending-item-amount">
            <p>-{item.amount}</p>
        </div>
        <div className="spending-item-button">
            <button onClick={() => {handleRemoveItem(item.id, item.amount)}}>x</button>
        </div>
    </li>
}