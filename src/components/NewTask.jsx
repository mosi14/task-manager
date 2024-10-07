import  { useState } from "react";

function NewTask({ addTask }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== "") {
            addTask(task);  // Call the function passed from the parent (App.js)
            setTask("");    // Clear the input after submission
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter a new task"
                value={task}
                onChange={(e) => setTask(e.target.value)} // Update input state
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Add Task
            </button>
        </form>
    );
}

export default NewTask;