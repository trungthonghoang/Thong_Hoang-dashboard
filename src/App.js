import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./components/MainPage";
import StudentOverview from "./components/StudentOverview";
import IndividualStudent from "./components/IndividualStudent";
import StudentData from "./data/StudentData";

import "./styles/App.css";

const filterOnWeek = (studentData, filter) => {
  return studentData.filter((item) => {
    return item.assignment.includes(filter);
  });
};

const filterStudents = (studentData) => {
  const students = [];
  studentData.forEach((item) => {
    if (!students.includes(item.name)) {
      students.push(item.name);
    }
  });
  return students;
};

export default function App() {
  const studentData = filterOnWeek(StudentData, "W1");
  const students = filterStudents(StudentData);
  return (
    <Router>
      <Header />
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Students">Students</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route
            path="/Students/Student/:name"
            render={(props) => (
              <IndividualStudent {...props} studentData={studentData} />
            )}
          />
          <Route path="/Students/">
            <StudentOverview students={students} />
          </Route>
          <Route path="/">
            <MainPage studentData={studentData} students={students} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
