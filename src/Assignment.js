import { useState,useEffect } from "react";

function Appp(){
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  //fetch :fetch() 함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환합니다. 반환된 객체는, API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고, 실패했을 경우에는 예외(error) 객체를 reject합니다. 
  //then : 비동기 처리가 끝난 다음에 처리할 일을 정의할 수 있는 메소드
  // async, await : ?블로그 정리.
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return <div>
     <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
  </div>
}
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
  //code challenge
  //input창에 입력을 받아서 ex) 20달러면 몇 BTC인지 치환하는 인풋창을 구현해보자~
  return (
    <div>
      <Appp/>
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
        {/* map메소드를 사용하면 react.js는 엘리먼트에 key를 줘야함 */}
      {toDos.map((toDo, index) => <li key={index}>{toDo}</li>)}
      </ul>
      

    </div>
  );
}

export default App;