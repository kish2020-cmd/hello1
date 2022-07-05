class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(name, description, assignedTo, dueDate, status, priority) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status,
            priority: priority
        };

        this.tasks.push(task);
    }
    // Method to update task status as done
    updateTask(id) {
        const task = this.tasks[id];
        task.status = "Done";
        this.tasks[id] = task;
    }

    // Create the render method
    render() {

        // Create an array to store the tasks' HTML
        const tasksHtmlList = [];

        // Loop over our tasks and create the html, storing it in the array
        for (let i = 0; i < this.tasks.length; i++) {
            // Get the current task in the loop
            const task = this.tasks[i];
            console.log(JSON.stringify(task, null, 4));
            // Format the date
            const date = new Date(task.dueDate);
            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

            // Create the task html
            const taskHtml = createTaskHtml(task);

            // Push it to the tasksHtmlList array
            tasksHtmlList.push(taskHtml);
        }

        // Create the tasksHtml by joining each item in the tasksHtmlList
        // with a new line in between each item.
        const tasksHtml = tasksHtmlList.join('\n');

        // Set the inner html of the tasksList on the page
        const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;

        //Hide the Status=Done tasks 'Mark as done' button
        for (let i = 0; i < this.tasks.length; i++) {
             if (this.tasks[i].status == "Done") {
                const buttonDiv = document.getElementById(i);
                if (buttonDiv.style.display === 'none') {
                    buttonDiv.style.display = 'block';
                } else {
                    buttonDiv.style.display = 'none';
                }
            }  
        }


    }
}  //end of class