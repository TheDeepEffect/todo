import React from "react";
import Task from "./Task";

class TaskCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.cardState;

    this.checkedHandleChange = this.checkedHandleChange.bind(this);
    this.inputHandleChange = this.inputHandleChange.bind(this);
    this.inputHandleChangeTask = this.inputHandleChangeTask.bind(this);
    this.inputBlurTask=this.inputBlurTask.bind(this);
    this.inputFocusChangeTask=this.inputFocusChangeTask.bind(this);

  }

  componentDidMount() {
    this.setState((state) => state.tasks.map( task => task.id=Date.now()))
  }
     
  
  checkedHandleChange(id) {
    this.setState(state =>
      state.tasks.filter((task) => (task.id===id) && (task.isCompleted = !task.isCompleted)  )
    );
  }
inputFocusChangeTask(id){
      //Checking wether this is the last task input in ordr to add one.
      
      
      if(this.state.tasks.findIndex(task=>task.id===id) ===this.state.tasks.length-1 )
      {
        this.setState((state) =>(
          state.tasks.splice(this.state.tasks.length,0,
            {
              id:Date.now(),
              task:"",
              isCompleted:false,
              time:"",
            }
            )
        ) );
        console.log("abcddd",this.state.tasks.indexOf(task => task.id===id));
      }
  
}

  inputHandleChangeTask(e, id) {
    const text = e.target.value;
    // console.log("id", id);
    
    //Saving input to state.
    this.setState(state =>
      state.tasks.map(
        task =>
          task.id === id &&
          ((task.task = text),
          (task.time = new Date().toLocaleString("en-IN", { hour12: true })))
      )
    );
  }
  //In order to delete if input is empty and
  inputBlurTask(e,id){
   const text = e.target.value;
    if( text.length <=1 && this.state.tasks.length>1 )
    {
      console.log("onblur")
      this.setState((state) =>(state.tasks.length>1 &&
        state.tasks.splice(state.tasks.findIndex(task=>task.id===id),1)
      ) );
      console.log(this.state.tasks);
      
    }
  }

  inputHandleChange(e) {
    const text = e.target.value;
    this.setState({
      title: text,
      cardTime: new Date().toLocaleString("en-IN", { hour12: true })
    });
  }

  render() {
    const tasks = this.state.tasks.map(task => (
      <Task
        key={task.id}
        tasks={task}
        onCheckChange={this.checkedHandleChange}
        onInputChange={this.inputHandleChangeTask}
        onBlur={this.inputBlurTask}
        onFocus={this.inputFocusChangeTask}
      />
    ));

    // tasks.push
    return (
      <li key = {this.state.id}  >
        <div className="taskCard">
        <div className="ui cards  ">
          <div className="card">
            <div className="content">
              <div className="header">
                <div className="ui transparent input">
                  <input
                    id="12"
                    type="text"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.inputHandleChange}
                    onBlur={this.props.onBlur}
                  />
                </div>
                <div className="meta sm ">{this.state.cardTime}</div>
              </div>
            </div>
            <div className="content">
              <ul>{tasks}</ul>
            </div>
          </div>
        </div>
      </div>
      </li>
    );
  }
}
export default TaskCard;
