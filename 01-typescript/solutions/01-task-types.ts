type Priority = 'low' | 'medium' | 'high';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: Priority;
}

function getOpenTasks(tasks: Task[]): Task[] {
  return tasks.filter((task) => !task.completed);
}
