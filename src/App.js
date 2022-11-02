
import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom'
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat"




function App() {




  return (


  <HashRouter>
    <Routes>
      <Route path='/' element={<Join />} />
      <Route path='/chat' element={<Chat />} />
    </Routes>
  </HashRouter>
  )
}

export default App;
