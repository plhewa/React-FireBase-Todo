import React, {Component} from 'react';
import TodoInsertion from "./components/TodoInsertion";
import TodoTaskList from "./components/TodoTaskList";
import IntroductionPost from "./components/IntroductionPost";
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

    /**
     *Initialize the states
     */
    state = {
        tasks:[],
        id : Date.now(),
        task : '',
        isEditTask : false,
        isComplete : false

    }


    /**
     *This method manipulate the change of the event
     */
    handleOnChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }
    /**
     *This method manipulate the Submission method
     */
    executeSubmission = (e) =>{
        e.preventDefault();

        const newTask = {
            id:this.state.id,
            taskName:this.state.task,

        }
        console.log(newTask);
        //This keeps older tasks and newly added task in an array
        const updatedTasks = [...this.state.tasks,newTask];
        this.setState({
            tasks:updatedTasks,
            task:'',
            id: Date.now(),
            isEditTask: false,
            isComplete: false
        })
    }

    /**
     *This method manipulate the Update method
     */
    executeModification = (id) => {

        const selectedTasks = this.state.tasks.filter(task =>
            task.id !== id)

        const selectedTask = this.state.tasks.find(task => task.id=== id)

        console.log(selectedTask);
        this.setState({
            tasks:selectedTasks,
            task: selectedTask.taskName,
            isEditTask : true,
            id : id

        });
    };


    /**
     *This method manipulate the status completion of the tasks
     */
    markAsComplete = (id) =>{
        const selectedTask = this.state.tasks.find(task => task.id=== id);
        selectedTask.isComplete = true;


        this.setState({
            id : id,
            isComplete: selectedTask.isComplete,
            tasks:this.orderTaskList(this.state.tasks)


        });


    }
    /**
     *This method sort down the list completed tasks in the bottom and incomplete task in the top
     */
    orderTaskList = (taskList) => {

        const newlyOrderdTasks = taskList.filter(task => task.isComplete === true);

        for (let num = 0; num < taskList.length; num++) {

            if (taskList[num].isComplete !== true) {

                newlyOrderdTasks.push(taskList[num])

            }

        }



        return newlyOrderdTasks;
    }


    /**
     *This method manipulate the Delete method
     */
    executeDeletion = (id) => {
        const selectedTasks = this.state.tasks.filter(task =>
        task.id !== id)
        this.setState({
            tasks:selectedTasks
        })
    }



    /**
     *This the render method
     */
    render() {
        return (

            <div className="container" style={{backgroundColor: "#e1b0ef"}}>
                <IntroductionPost/>
                <div className="row" >
                    <div className="col-10 mx-auto col-md-8  mt-4">
                        <h3 className="text-capitalize text-center"> <u>Add Task Name</u></h3>
                        <TodoInsertion task={ this.state.task}
                                       handleOnChange={this.handleOnChange}
                                       executeSubmission = {this.executeSubmission}
                                       isEditTask = {this.state.isEditTask}/>

                        <TodoTaskList tasks={this.state.tasks}
                                      isComplete={this.state.isComplete}
                                      executeDeletion={this.executeDeletion}
                                      executeModification={this.executeModification}
                                      markAsComplete={this.markAsComplete}/>
                    </div>
                </div>

                </div>

        );
    }
}

export default App;



