import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../features/taskslice';

export default function TaskManager() {
    const [task, setTaskName] = useState("");
    const [taskField, setTaskField] = useState("");
    const [taskManager, setTaskManager] = useState("");
    const [priority, setPriority] = useState("");
    const [editIndex, setEditIndex] = useState("");

    const count = useSelector((state) => state.taskKey);
    const tasks = count?.task || [];
    const dispatch = useDispatch();

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    };

    const addRecord = () => {
        if (editIndex) {
            dispatch(updateTask({ id: editIndex, task, taskField, taskManager, priority }));
            resetForm();
        } else {
            if (task && taskField && taskManager) {
                dispatch(addTask({ id: Date.now(), task, taskField, taskManager, priority }));
                resetForm();
            } else {
                alert("Please fill all fields.");
            }
        }
    };

    const resetForm = () => {
        setTaskName("");
        setTaskField("");
        setTaskManager("");
        setPriority("");
        setEditIndex("");
    };

    const deleteRecord = (id) => {
        dispatch(deleteTask(id));
    };

    const editRecord = (id) => {
        const editData = tasks.find((item) => item.id === id);
        if (editData) {
            setTaskName(editData.task);
            setTaskField(editData.taskDes);
            setTaskManager(editData.taskManager);
            setPriority(editData.priority);
            setEditIndex(id);
        }
    };

    return (
        <div className="task-manager">
            <h1 className="task-title">Task Manager</h1>
            <input
                type="text"
                className="task-input"
                placeholder="Enter Task Name"
                onChange={(e) => setTaskName(e.target.value)}
                value={task}
            />
            <br /><br />
            <input
                type="text"
                className="task-input"
                placeholder="Enter Task Field"
                onChange={(e) => setTaskField(e.target.value)}
                value={taskField}
            />
            <br /><br />
            <input
                type="text"
                className="task-input"
                placeholder="Enter Task Manager Name"
                onChange={(e) => setTaskManager(e.target.value)}
                value={taskManager}
            />
            <br /><br />

            <label className="priority-label">Enter Task Priority:</label>
            <br />
            <div className="priority-selection">
                <input type="radio" name="priority" value="High" onChange={handlePriorityChange} checked={priority === "High"} />
                <label className="priority-option">High</label>
                <input type="radio" name="priority" value="Medium" onChange={handlePriorityChange} checked={priority === "Medium"} />
                <label className="priority-option">Medium</label>
                <input type="radio" name="priority" value="Low" onChange={handlePriorityChange} checked={priority === "Low"} />
                <label className="priority-option">Low</label>
            </div>
            <br />

            <button className="submit-button" onClick={addRecord}>{editIndex ? "Update" : "Add"}</button>

            {tasks.map((e) => (
                <div key={e.id} className="task-item">
                    <img className="task-image" src={e.image} alt="" />
                    <p>Task: {e.task}</p>
                    <p>Task Description: {e.taskDes}</p>
                    <p>Task Manager Name: {e.taskManager}</p>
                    <p>Task Priority: {e.priority}</p>

                    <button className="edit-button" onClick={() => editRecord(e.id)}>Edit</button>
                    <button className="delete-button" onClick={() => deleteRecord(e.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
