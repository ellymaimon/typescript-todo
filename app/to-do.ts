class Task {
  done: boolean = false;

  constructor(public description: string, public priority: string) {}
  
  markDone() {
    this.done = true;
  }
}

//create a variable named tasks and set its data type to an array of Tasks
var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));

tasks[0].markDone();

for(var task of tasks) {
  console.log(task);
}
