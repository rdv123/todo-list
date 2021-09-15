
  import { useState } from 'react';
import './App.css';

  function App() {
   const [todos,setTodos] = useState( 
   [{id:'1',title:'купить хеб'},
   {id:'2',title:'выучить react'},
   {id:'3',title:'выучить js'},
   {id:'4',title:'выучить css'},
   {id:'5',title:'выучить bootsrap'},
 ])

  const [color,setColor] = useState('black')
   let colorTest ='blackTest'
 
    let  deleteTask = (id) => {
        colorTest ='green'
        console.log(colorTest)
        setColor('blue')
    }

    return (
    <div className="container">
      <div className="input-group mb-3">
          <input type="text" 
                   className="form-control" 
                    placeholder="Recipient's username" 
                aria-label="Recipient's username" 
                  aria-describedby="button-addon2"/>
        <button type="button" className="btn btn-primary">Primary</button>
      </div>
      <ul className="list-group">
      
        {todos.map((todo)=>{
          return  <div><li className="list-group-item">{todo.title}
          
          </li>
          <button type="button" 
                  className="btn btn-primary"
                  onClick={()=>deleteTask(todo.id)}>{color} -------{colorTest}</button>
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
