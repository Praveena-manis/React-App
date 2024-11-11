import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Cart(){
    const [newItem,setNewItem]=useState('');
    const items=useSelector(state=>state.itemReducer.items);
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch({type:"ADD_ITEM",payload:{id:Date.now(),name:newItem}})
        setNewItem('');
    }
    return(
        <div>
            <h1>Cart Component</h1>
            <h3>Items Available in your Cart</h3>
            <ul>
                {
                    items.map((item)=>(
                        <li key={item.id}>{item.name}
                        <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:item.id})}>X</button></li>
                    ))
                }
            </ul>
            <div>
                <input type='text' value={newItem} onChange={(e)=>setNewItem(e.target.value)} placeholder="Enter Items to Add your Cart"/>
                <button onClick={handleClick}>ADD ITEM</button>
            </div>
        </div>
    )
}
export default Cart;