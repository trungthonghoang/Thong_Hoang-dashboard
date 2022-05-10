import React from "react";
import Chart from "./Chart";

export default class MainPage extends React.Component {
  constructor(props) {
    super();

    const students = props.students.map((item) => {
      return {
        name: item,
        state: true,
      };
    });

    this.state = {
      students: students,
    };
  }

  averageDifficulty(studentData, assignment) {
    let average = 0;
    let items = 0;
    studentData.forEach((item) => {
      if (item.assignment === assignment) {
        average += item.difficult;
        items++;
      }
    });
    return average / items;
  }

  averageFun(studentData, assignment) {
    let average = 0;
    let items = 0;
    studentData.forEach((item) => {
      if (item.assignment === assignment) {
        average += item.fun;
        items++;
      }
    });
    return average / items;
  }

  averageStudentData(studentData) {
    const averageStudentData = [];
    let filterItemId = 1;
    studentData.forEach((studentItem) => {
      const data = averageStudentData.find((filterItem) => {
        return studentItem.assignment === filterItem.assignment;
      });
      if (data === undefined) {
        const averageDifficult = this.averageDifficulty(
          studentData,
          studentItem.assignment
        );
        const averageFun = this.averageFun(studentData, studentItem.assignment);
        averageStudentData.push({
          id: filterItemId++,
          name: "average",
          assignment: studentItem.assignment,
          difficult: averageDifficult,
          fun: averageFun,
        });
      }
    });

    return averageStudentData;
  }

  filteredStudentsData() {
    const filteredStudentsData = this.props.studentData.filter(
      (studentDataItem) => {
        const student = this.state.students.find((studentItem) => {
          return studentItem.name === studentDataItem.name;
        });
        return student !== undefined && student.state === true;
      }
    );
    return filteredStudentsData;
  }

  render() {
    const filteredStudentsData = this.filteredStudentsData(
      this.props.studentData
    );
    const averageStudentData = this.averageStudentData(filteredStudentsData);
    return (
      <div className="mainpage">
        <h1>Overview all students 2022</h1>
        <Chart studentData={averageStudentData} />
      </div>
    );
  }
}
