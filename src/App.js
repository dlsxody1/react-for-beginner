import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  //event.target -> 이벤트가 발생되는 요소
  //event.target.value -> 이벤트가 발생되는 요소안에 들어있는 값.
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    console.log(toDo, toDos );
    //...currentArray -> 배열의 값들을 엘리멘트로 반환한다.
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
       
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
      {toDos.map((toDo, index) => <li key={index}>{toDo}</li>)}
      </ul>
      

    </div>
  );
}

export default App;