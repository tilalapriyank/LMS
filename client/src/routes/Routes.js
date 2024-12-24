// Routes.js
import React, { useContext } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import AdminPage from '../pages/AdminPage';
import InstructorPage from '../pages/InstructorPage';
import StudentPage from '../pages/StudentPage';
import Login from '../pages/login/Login';

const Routes = () => {
  const { role } = useContext(UserContext); // Get the user role

  return (
    <Router>
      <Switch>
        {role === 'admin' && <Route path="/admin" component={AdminPage} />}
        {role === 'instructor' && <Route path="/instructor" component={InstructorPage} />}
        {role === 'student' && <Route path="/student" component={StudentPage} />}
        {!role && <Route path="/" component={Login} />}
      </Switch>
    </Router>
  );
};

export default Routes;
