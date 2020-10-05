import React, {Component} from 'react';

class TodoTask extends Component {
    render() {

        const {taskName,executeDeletion,executeModification,markAsComplete,isComplete} = this.props
        return (
           <li className="list-group-item list-group-item-info d-flex justify-content-between my-3">
               <h6>{taskName}</h6>
               <div className="todo-icon">

                   {/*Completion status*/}
                   <span  onClick={markAsComplete}
                       className ={isComplete ?"mx-3 text-success":"mx-3 text-danger"}>
                       <i
                           className={isComplete ?"fa fa-check-circle" : "fa fa-window-close" }>

                        </i>
                       {isComplete ? 'Completed':'Incompleted'}
                   </span>

                   {/*Update icon*/}
                   <span
                       className ={isComplete ?"mx-3 text-warning invisible":"mx-3 text-warning"}
                       onClick = {isComplete ? '':executeModification}>
                       <i className="fa fa-pencil"></i>

                   </span>

                   {/*Delete icon*/}
                   <span className="mx-3 text-danger" onClick={executeDeletion}>
                       <i className="fa fa-trash"></i>
                   </span>
               </div>
           </li>
        );
    }
}

export default TodoTask;