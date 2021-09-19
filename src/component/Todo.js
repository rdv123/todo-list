import React from 'react'

const Todo = ({todoProps,deleteTaskProps, strikOutText}) => {
   
    return (
        <>
            <li className="list-group-item w-100 d-flex" 
                onClick = {()=>strikOutText(todoProps.id)}
                style={{ textDecorationLine: todoProps.completed ? 'line-through' : ''}}>{todoProps.title} 
                <small className="ms-auto">{todoProps.date}</small> 
            </li>
                <button type="button" 
                        className="btn btn-danger"                       
             onClick={()=>deleteTaskProps(todoProps.id)}>Удалить</button>
        </>
    )
}

export default Todo
