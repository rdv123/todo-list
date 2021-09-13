
  import './App.css';


  function App() {
    return (
    <div className="container">
      <button type="button" className="btn btn-primary">Кнопка1</button>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email адрес</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">Введите адрес электронной почты</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Пароль</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Проверить</label>
        </div>
        <button type="submit" className="btn btn-primary">зарегиться</button>
      </form>
    </div>
    
    
  
    );
  }

  export default App;
