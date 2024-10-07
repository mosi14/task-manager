import {useState} from "react";
import NewTask from "./components/NewTask";  // Import the NewTask component
import TaskList from "./components/TaskList";  // Import the TaskList component

function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all"); // State for task filter

    const addTask = (taskName) => {
        setTasks([...tasks, {id: tasks.length + 1, name: taskName, completed: false}]);
    };
    // Function to toggle the completion status of a task
    const toggleComplete = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? {...task, completed: !task.completed} : task
            )
        );
    };

    // Function to delete a task
    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };


    // Function to edit a task's name
    const editTask = (taskId, newName) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, name: newName } : task
            )
        );
    };

    // Function to filter tasks based on the filter state
    const getFilteredTasks = () => {
        if (filter === "completed") {
            return tasks.filter((task) => task.completed);
        } else if (filter === "incomplete") {
            return tasks.filter((task) => !task.completed);
        }
        return tasks;
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-md mx-auto bg-white p-4 rounded shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Task Manager</h1>

                <NewTask addTask={addTask}/>
                {/* Filter Buttons */}
                <div className="flex justify-between mb-4">
                    <button
                        onClick={() => setFilter("all")}
                        className={`px-4 py-2 rounded-md ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter("completed")}
                        className={`px-4 py-2 rounded-md ${filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    >
                        Completed
                    </button>
                    <button
                        onClick={() => setFilter("incomplete")}
                        className={`px-4 py-2 rounded-md ${filter === "incomplete" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    >
                        Incomplete
                    </button>
                </div>

                <TaskList tasks={getFilteredTasks()}
                          toggleComplete={toggleComplete}
                          editTask={editTask}
                          deleteTask={deleteTask}/>
            </div>
        </div>
    );
}

export default App;