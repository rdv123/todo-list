import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import "./App.css";
import Todo from "./component/Todo";
let count = 200;
function App() {
  const [text, setText] = useState("");

  const [todos, setTodos] = useState([
    { id: "1", title: "купить хеб", date: "13.09.21", completed: false },
    { id: "2", title: "выучить react", date: "13.09.21", completed: false },
    { id: "3", title: "выучить js", date: "13.09.21", completed: true },
    { id: "4", title: "выучить css", date: "13.09.21", completed: false },
    { id: "5", title: "выучить bootsrap", date: "13.09.21", completed: true },
  ]);

  // Mlab_iaTMck6WMkwgZ_:
  //    completed: false
  //    date: "09.10.2021, 22:53:44"
  //     id: "201"
  //   title: "fffffffffffffffffffff"
  const getTodos = async () => {
    // fetch('https://jsonplaceholder.typicode.com/todos/')
    // .then(response => response.json())
    // .then(todos => setTodos(todos))
    const respons = await fetch(
      "https://todo-app-73190-default-rtdb.firebaseio.com/todos.json"
    );
    const obj = await respons.json();
    const keys = Object.keys(obj);
    console.log("newArray", keys);
    const todos = keys.map((key) => {
      return { ...obj[key], id: key };
    });

    console.log("todos", todos);
    setTodos(todos);
  };

  //  const [count, setCount] = useState(0)
  //  (count) => {
  //   setCount(count+1)
  //  }
  let d = new Date();
  // let options ={
  //   //era: 'long',
  //   year: 'numeric',
  //   month: 'long',
  //   day:'numeric',
  //   weekday: 'long',
  //   //timezone:'UTC',
  //   hour:'numeric',
  //   minute: 'numeric',
  //   sekond: 'numeric'
  // }
  //console.log(d.toLocaleString('ru',options))

  let pushTask = (title) => {
    count++;
    //  const copyArray = [...todos]
    //  console.log('copyArray',copyArray)
    //  copyArray.push({id:'6',title})
    fetch("https://todo-app-73190-default-rtdb.firebaseio.com/todos.json", {
      headers: {
        // 'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        id: count.toString(),
        title,
        completed: false,
        date: d.toLocaleString(),
      }),
    });
    setTodos([
      {
        id: count.toString(),
        title,
        completed: false,
        date: d.toLocaleString(),
      },
      ...todos,
    ]);
    // localStorage.setItem(
    //   "todosData",
    //   JSON.stringify([
    //     {
    //       id: count.toString(),
    //       title,
    //       completed: false,
    //       date: d.toLocaleString(),
    //     },
    //     ...todos,
    //   ])
    // );
    setText("");
    console.log(todos);

    //  setTodos()
    //  console.log(todos)
    //  todos.unshift({id:'6',title})
    //  console.log(todos)
  };
  // const [color,setColor] = useState('black')
  //  let colorTest ='blackTest'

  let deleteTask = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
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
  };
  let strikOutText = (id) => {
    //console.log(id)
    //  const todo = todos.find((todo)=>todo.id === id)
    // //  console.log('todo',todo)
    // todo.completed = !todo.completed
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  let a = todos.length;
  //console.log(a)
  let b = todos.filter((todo) => todo.completed === true);
  let c = todos.filter((todo) => todo.completed === false);

  useEffect(() => {
    // const raw = localStorage.getItem('todosData')
    // const todosLocal = JSON.parse(raw)
    // console.log('todosLocal',todosLocal)
    // setTodos(todosLocal)
    console.log("useEffect");
    getTodos();
  }, []);

  if (todos.length === 0) {
    return;
  }

  return (
    <div className="container mt-3">
      <div className="d-flex flex-row bd-highlight mb-3">
        <div className="p-2 bd-highlight">Всего дел: {a}</div>
        <div className="p-2 bd-highlight">Выполнено: {b.length}</div>
        <div className="p-2 bd-highlight">
          Когда-нибудь доделать: {c.length}
        </div>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          value={text}
          className="form-control"
          placeholder="Внесите задачу"
          aria-label="Recipient's us"
          aria-describedby="button-addon2"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="button"
          disabled={text === ""}
          className="btn btn-primary"
          onClick={() => pushTask(text)}
        >
          Добавить
        </button>
      </div>

      {/* <div class="hstack gap-3">
  <input class="form-control me-auto" type="text" placeholder="Добавьте сюда свой товар...">
  <button type="button" class="btn btn-secondary">Отправить</button>
  <div class="vr"></div>
  <button type="button" class="btn btn-outline-danger">Сбросить</button>
</div> */}
      <div>
        <ul className="list-group">
          {todos.map((todo) => {
            return (
              <div className="d-flex mb-3 shadow" key={todo.id}>
                <Todo
                  deleteTaskProps={deleteTask}
                  strikOutText={strikOutText}
                  todoProps={todo}
                />
              </div>
            );
          })}

          {/* <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li> */}
        </ul>
      </div>
      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea">Comments</label>
      </div>
    </div>
  );
}

export default App;
