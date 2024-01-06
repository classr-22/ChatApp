import logo from './logo.svg';
import './App.css';
import MainContainer from './Components/MainContainer';
import Login from './Components/Login';
import { Route, Routes } from 'react-router-dom';
import Welcom from './Components/Welcom';
import ChatArea from './Components/ChatArea';
import Users_Groups from './Components/Users_Groups';
import CreateGroups from './Components/CreateGroups';
import Groups from './Components/Groups';

function App() {
  return (
    <div className="App">
      {/* <MainContainer></MainContainer> */}
      {/* <Login></Login> */}

      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path='app' element={<MainContainer></MainContainer>}>
          <Route path='welcome' element={<Welcom></Welcom>}></Route>
          <Route path='chat/:_id' element={<ChatArea></ChatArea>}></Route>
          <Route path='users' element={<Users_Groups></Users_Groups>}></Route>
          <Route path='groups' element={<Groups></Groups>}></Route>
          <Route path='create-groups' element={<CreateGroups></CreateGroups>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
