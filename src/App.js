import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './Components/AddUser';
import SearchUser from './Components/SearchUser';
import DeleteUser from './Components/DeleteUser';
import ViewAll from './Components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddUser/>}/>
      <Route path="/search" element={<SearchUser/>}/>
      <Route path="/delete" element={<DeleteUser/>}/>
      <Route path="/view" element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
