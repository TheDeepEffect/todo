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

    this.inputHandleChangeCard=this.inputHandleChangeCard.bind(this);
    this.inputBlurCard = this.inputBlurCard.bind(this);
  }

  componentDidMount() {
    // this.setState((state) => state.tasks.map( task => task.id=Date.now()))
    this.setState({ id: Date.now() });
  }

  inputBlurCard(e,id){
    const text = e.target.value;    
    if( text.length <=1 && this.state.length>1 )
    {
      

      //  this.setState((state) =>(state.tasks.length>1 &&
      //    state.tasks.splice(state.tasks.findIndex(task=>task.id===id),1)
      //  ) );
      //  console.log(this.state.tasks);
       
     }
   }

  inputHandleChangeCard(e, id) {
    const text = e.target.value;
    // console.log("id", id);
    
    //Saving input to state.
    this.setState((state) =>
      state.id === id &&(
        state.title=text
      )
    );
  }

  render() {
    const taskCards = [this.state];
    const cards = taskCards.map(card => (
      <TaskCard 
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
        <ul>
          {cards}
        </ul>
      </div>
    );
  }
}

export default App;
