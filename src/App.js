//switch의 역할. ->Route를 찾음 (Route? => URL) ->Route를 찾으면 렌더링한다~
//browser Router, Hash Router
//a태그와 Link 차이점..? a태그는 누르면 새로고침이 되지만 Link는 그렇지 않아도됌. 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;