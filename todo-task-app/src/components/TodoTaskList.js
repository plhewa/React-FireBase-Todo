import React, {Component} from 'react';
import TodoTask from "./TodoTask";

class TodoTaskList extends Component {

    render() {
        const {tasks,executeDeletion,executeModification,markAsComplete} = this.props
        return (
           <ul className="list-group my-5">
               <h3 className="text-capitalize text-center">
                   <u>Todo Task List</u>
               </h3>
               {
                   //reverse the  task list in-order to get the newly adding task to the top during the iteration
                   tasks.reverse().map(task =>{
                       return <TodoTask key={task.id}
                                        taskName={task.taskName}
                                        executeDeletion ={() =>executeDeletion(task.id)}
                                        executeModification = {() =>executeModification(task.id)}
                                        markAsComplete = {() =>markAsComplete(task.id)}
                                        isComplete = {task.isComplete}

                       />
                   })
               }



           </ul>
        );
    }
}

export default TodoTaskList;