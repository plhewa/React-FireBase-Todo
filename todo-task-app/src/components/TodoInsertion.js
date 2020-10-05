import React, {Component} from 'react';

class TodoInsertion extends Component {
    render() {
      const{task,handleOnChange,executeSubmission,isEditTask} = this.props

        //Insertion form of a new task
        return (
            <div className="card card-body bg-white my-4">
                <form onSubmit={executeSubmission}>
                    <div className="input-group">
                        <div className="input-group prepend">
                            <div className="input-group-text bg-success text-white-50">
                                <i className="fa fa-file">

                                </i>

                            </div>
                        </div>
                            <input type="text" className="form-control"
                                   placeholder="add a new  todo task"
                                    value={task}
                                   onChange={handleOnChange}
                            />

                            <button type="submit"

                                    className={
                                        isEditTask ? "btn btn-warning":
                                            "btn btn-primary"
                                    }>
                                {isEditTask ? "Edit Task":"Add Task"}
                            </button>
                    </div>
                </form>
            </div>


        );
    }
}

export default TodoInsertion;