
  import { useState } from 'react';
import './App.css';

  function App() {
    const [text,setText] = useState('')
    
   const [todos,setTodos] = useState( 
   [{id:'1',title:'купить хеб'},
   {id:'2',title:'выучить react'},
   {id:'3',title:'выучить js'},
   {id:'4',title:'выучить css'},
   {id:'5',title:'выучить bootsrap'},
 ])
//  const [count, setCount] = useState(0)
//  (count) => {
//   setCount(count+1)
//  }
  let count = 0
 count++
 let pushTask = (title)=>{
   
  //  const copyArray = [...todos]
  //  console.log('copyArray',copyArray)
  //  copyArray.push({id:'6',title})
   setTodos([{id:count,title},...todos])
   console.log(...todos)
  setText("")
  //  setTodos()
  //  console.log(todos)
  //  todos.unshift({id:'6',title})
  //  console.log(todos)
 }
  // const [color,setColor] = useState('black')
  //  let colorTest ='blackTest'
 
    let  deleteTask = (id) => {
      setTodos([...todos].filter((todo)=>todo.id !== id))
  //     const copyArray = [...todos]
  //  console.log('copyArray',copyArray)
  //  copyArray.filter((todo) => todo.id !== id)
  //  setTodos(copyArray)
  //  console.log(copyArray)
        // colorTest ='green'
        // console.log(colorTest)
        // setColor('blue')
      // let newTodos = todos.filter((todo) => todo.id !== id)
      // console.log(newTodos)
      
    }

    return (
    <div className="container">
      <div className="input-group mb-3">
          <input type="text" 
               value={text}
                   className="form-control" 
                    placeholder="Recipi" 
                aria-label="Recipient's us" 
                  aria-describedby="button-addon2"
                   onChange={
                     (e)=>setText(e.target.value)
                    }
                    />
        <button type="button" 
                className="btn btn-primary"
                onClick = {()=> pushTask (text)}>Добавить</button>
      </div>
      <ul className="list-group">
      
        {todos.map((todo)=>{
          return  <div>
                      <li className="list-group-item">{todo.title}</li>
                      <button type="button" 
                            className="btn btn-primary"
                            onClick={()=>deleteTask(todo.id)}>Удалить</button>
                      </div>
        })}
              
          {/* <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li> */}
        </ul>
    </div>
    
  
    );
  }

  export default App;
