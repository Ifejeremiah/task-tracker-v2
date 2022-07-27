import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Meet with Goodness",
      day: "Thu Jul 07 2022 22:47:09 GMT+0100 (West Africa Standard Time)",
      reminder: true,
    },
    {
      id: 2,
      text: "Do Laundry",
      day: "Sat Jul 30 2022 00:00:00 GMT+0100 (West Africa Standard Time)",
      reminder: false,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    task.id = Math.floor(Math.random() * 1000);
    setTask([...tasks, task]);
  };

  // Delete Task
  const onDelete = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        btnColor={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add"}
      />
      <>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} />
        ) : (
          "No tasks to show"
        )}
      </>
    </div>
  );
}

export default App;
