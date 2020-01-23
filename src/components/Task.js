import React from "react";

const Task=(props)=>{  
  
    const TaskList =  (
    <li key={props.tasks.id}>
      <input
        type="checkbox"
        id={props.tasks.id}
        value={props.tasks.task}
        checked={props.tasks.isCompleted}
        onChange={()=>props.onCheckChange(props.tasks.id)}
      />
      <div className="ui transparent input">
        <input 
        type="text" 
        placeholder="Task here..."
        value={props.tasks.task} 
        onChange={(e)=>props.onInputChange(e,props.tasks.id)} 
        onBlur = {(e)=>props.onBlur(e,props.tasks.id)}
        onFocus= {()=>props.onFocus(props.tasks.id)}
        />
      </div>
      <div className="meta">{props.tasks.time}</div>
    </li>
    );
  
    //   console.log("ABCD",this.state.tasks)
    //   console.log(
    //       this.state.tasks.map(task=>task.props)
    //   );
      
  
    return TaskList;
  }
export default Task;
