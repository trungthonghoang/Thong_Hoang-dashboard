import React from "react";
import SelectCheckbox from "./SelectCheckbox";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";

export default class Chart extends React.Component {
  constructor() {
    super();
    this.state = {
      showDifficult: true,
      showFun: true,
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(name, state) {
    if (name === "difficult") {
      this.setState(() => {
        return {
          showDifficult: state,
        };
      });
    } else if (name === "fun") {
      this.setState(() => {
        return {
          showFun: state,
        };
      });
    }
  }

  render() {
    const renderDifficultyBar = (showDifficult) => {
      if (showDifficult) {
        return (
          <VictoryBar
            colorScale={["#ffb212"]}
            alignment="middle"
            data={this.props.studentData}
            x="assignment"
            y="difficult"
          />
        );
      }
    };

    const renderFunBar = (showFun) => {
      if (showFun) {
        return (
          <VictoryBar
            colorScale={["#4f8bc9"]}
            alignment="middle"
            data={this.props.studentData}
            x="assignment"
            y="fun"
          />
        );
      }
    };

    return (
      <div className="chart">
        <div className="checkboxContainer">
          <SelectCheckbox
            selectName={"difficult"}
            selectText={"Show/hide difficulty"}
            selectChange={this.handleFilterChange}
          />
          <SelectCheckbox
            selectName={"fun"}
            selectText={"Show/hide fun"}
            selectChange={this.handleFilterChange}
          />
        </div>
        <VictoryChart
          domainPadding={{ x: 15 }}
          padding={{ left: 30, top: 10, right: 30, bottom: 90 }}
        >
          <VictoryAxis
            tickFormat={this.props.studentData.assigment}
            style={{
              tickLabels: { angle: 45, textAnchor: "start", fontSize: 6 },
              ticks: { stroke: "grey", size: 5 },
            }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={[1, 2, 3, 4, 5]}
            style={{
              tickLabels: { fontSize: 10 },
              ticks: { stroke: "grey", size: 5 },
            }}
          />
          <VictoryGroup offset={9} style={{ data: { width: 8 } }}>
            {renderDifficultyBar(this.state.showDifficult)}
            {renderFunBar(this.state.showFun)}
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}
