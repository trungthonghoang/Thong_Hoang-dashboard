import React from "react";
import { Link } from "react-router-dom";

export default function StudentOverview(props) {
  const studentLinks = props.students.map((item) => {
    const studentUrl = "/Students/Student/" + item;
    return (
      <li key={item}>
        <Link to={studentUrl}>{item}</Link>
      </li>
    );
  });
  return (
    <div className="studentoverview">
      <h1 className="student-title">Students</h1>
      <div className="studentoverview-block">
        <ul className="studentoverview-list">{studentLinks}</ul>
      </div>
    </div>
  );
}
