import React from "react";
import TaskCard from "./components/TaskCard";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      cardTime: "",
      tasks: [
        {
          id: "",
          task: "",
          isCompleted: false,
          time: ""
        }
      ]
    };
  }

  componentDidMount() {
    // this.setState((state) => state.tasks.map( task => task.id=Date.now()))
    this.setState({ id: Date.now() });
  }


  render() {
    const taskCards = [this.state];
    const cards = taskCards.map(card => (
      <TaskCard
          key={this.state.id} 
          cardState={this.state}
          onInputChangeCard={this.inputHandleChangeCard}
          onBlur ={this.inputBlurCard}
          />
    )
      );
    console.log("Data of Object", taskCards)


    console.log("State", this.state);
    return (
      <div className="App">
          {cards}
      </div>
    );
  }
}

export default App;
