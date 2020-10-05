import React, {Component} from 'react';

class IntroductionPost extends Component {
    render() {
        return (
            <div className="card card-body card bg-light text-dark my-3">
            <div>
                <center><h1><u>Welcome to the Todo Task app</u></h1></center>
            </div>
                <div>
                    <p align="justify">This is Todo Task App .
                         We can insert new tasks using this input text box.
                        Inserted tasks will be visible as a list of todo tasks below.
                        Newly inserted tasks will appear in the top of the app.
                        Older tasks will be visible at the bottom of the list.
                        Three functions will be provided to you. They are <b>'Mark as complete' , 'Update task' , 'Delete task' .</b>
                        We can set the completion state by clicking the completion icon.
                        Completed tasks cannot be updated again.
                        Completed task will be going to the bottom of the list automatically.
                        Deletion of the completed and incompleted tasks.
                        But modification can be done in incompleted task
                     </p>
                </div>
            </div>
        );
    }
}

export default IntroductionPost;