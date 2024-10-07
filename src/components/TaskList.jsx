import React, { useState } from "react";

function TaskList({ tasks, toggleComplete, deleteTask, editTask }) {
    const [editTaskId, setEditTaskId] = useState(null); // State to track the task being edited
    const [editedTaskName, setEditedTaskName] = useState(""); // State to hold the new task name

    // Function to handle edit button click
    const handleEditClick = (task) => {
        setEditTaskId(task.id); // Set the task to be edited
        setEditedTaskName(task.name); // Populate input with the current task name
    };

    // Function to handle saving the edited task
    const handleSaveClick = (taskId) => {
        editTask(taskId, editedTaskName); // Call the editTask function passed from the parent
        setEditTaskId(null); // Exit edit mode
    };

    return (
        <ul className="space-y-2">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className="flex justify-between items-center p-2 border rounded-md"
                >
                    <div className="flex items-center">
                        {/* Checkbox to toggle task completion */}
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleComplete(task.id)}
                            className="mr-2"
                        />

                        {/* If task is in edit mode, show input field, else show task name */}
                        {editTaskId === task.id ? (
                            <input
                                type="text"
                                value={editedTaskName}
                                onChange={(e) => setEditedTaskName(e.target.value)}
                                className="w-full px-2 py-1 border rounded-md"
                            />
                        ) : (
                            <span className={task.completed ? "line-through" : ""}>
                {task.name}
              </span>
                        )}
                    </div>

                    <div>
                        {/* Toggle between Edit/Save button */}
                        {editTaskId === task.id ? (
                            <button
                                onClick={() => handleSaveClick(task.id)}
                                className="text-green-500 hover:text-green-700 mr-2"
                            >
                                Save
                            </button>
                        ) : (
                            <button
                                onClick={() => handleEditClick(task)}
                                className="text-blue-500 hover:text-blue-700 mr-2"
                            >
                                Edit
                            </button>
                        )}

                        {/* Delete Button */}
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;