import React from "react";
import Chart from "./Chart";

export default class IndividualStudent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      studentName: props.match.params.name,
    };
  }

  averageAssignment(studentData, assignment) {
    let average = 0;
    let items = 0;
    studentData.forEach((item) => {
      if (item.assignment === assignment) {
        average += (item.difficult + item.fun) / 2;
        items++;
      }
    });
    return average / items;
  }

  averageIndividualStudent(studentData) {
    const averageData = studentData.map((studentItem) => {
      const average = (studentItem.difficult + studentItem.fun) / 2;
      return {
        id: studentItem.id,
        name: studentItem.name,
        assignment: studentItem.assignment,
        average: average,
      };
    });
    return averageData;
  }

  averageAllStudents(studentData) {
    const averageStudentData = [];
    let filterItemId = 1;
    studentData.forEach((studentItem) => {
      const data = averageStudentData.find((filterItem) => {
        return studentItem.assignment === filterItem.assignment;
      });
      if (data === undefined) {
        const average = this.averageAssignment(
          studentData,
          studentItem.assignment
        );
        averageStudentData.push({
          id: filterItemId++,
          name: "average",
          assignment: studentItem.assignment,
          average: average,
        });
      }
    });
    return averageStudentData;
  }

  render() {
    const studentData = this.props.studentData.filter((item) => {
      return item.name === this.state.studentName;
    });

    return (
      <div className="studentName">
        <h1>{this.state.studentName}</h1>
        <Chart studentData={studentData} />
      </div>
    );
  }
}
