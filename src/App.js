import Navbar from './component/navbar';
import Home from './component/home.component';
import AllUsers from './component/allUsers.component';
import AddUser from './component/adduser.component';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import NotFound from './component/notFound.component';
import EditUser from './component/editUser.component';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
