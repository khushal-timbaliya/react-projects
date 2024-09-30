import React, { useEffect, useState } from "react";

export default function TaskManager() {
  const [task, SetTask] = useState("");
  const [record, setRecord] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updatedData = record.map((Task) =>
        Task.id === editIndex ? { ...Task, task } : Task
      );

      setRecord(updatedData);
      localStorage.setItem("Task", JSON.stringify(updatedData));
      setEditIndex(null);
      SetTask("");
    } else {
      const newTask = { id: Date.now(), task, status: "Pending", color: "red" };
      const updatedTasks = [...record, newTask];

      setRecord(updatedTasks);
      localStorage.setItem("Task", JSON.stringify(updatedTasks));
      SetTask("");
    }
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("Task")) || [];
    setRecord(savedData);
  }, []);

  const editTask = (id) => {
    const editData = record.find((Task) => Task.id === id);

    if (editData) {
      SetTask(editData.task);
      setEditIndex(id);
    }
  };

  const deleteTask = (id) => {
    const deleteData = record.filter((Task) => Task.id !== id);
    setRecord(deleteData);
    localStorage.setItem("Task", JSON.stringify(deleteData));
  };

  const completeTask = (id) => {
    const updatedTasks = record.map((Task) =>
      Task.id === id ? { ...Task, status: "Complete", color: "green" } : Task
    );

    setRecord(updatedTasks);
    localStorage.setItem("Task", JSON.stringify(updatedTasks));
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-4xl transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-10">Task Manager</h1>

        <div className="mb-6">
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
            value={task}
            onChange={(e) => SetTask(e.target.value)}
            placeholder="Enter your task"
          />
        </div>

        <button
          className={`w-full p-3 rounded-xl text-lg font-bold ${
            editIndex !== null ? "bg-yellow-500" : "bg-blue-600"
          } text-white hover:bg-opacity-90 transition-all mb-6 shadow-lg`}
          onClick={handleSubmit}
        >
          {editIndex !== null ? "Update Task" : "Add Task"}
        </button>

        <table className="table-auto w-full text-left bg-gray-100 rounded-lg">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-6 py-3">No.</th>
              <th className="px-6 py-3">Task</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {record.map((taskItem, index) => (
              <tr key={taskItem.id} className="border-b bg-white hover:bg-gray-100 transition-all">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{taskItem.task}</td>
                <td
                  className={`px-6 py-4 font-bold ${
                    taskItem.status === "Complete" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {taskItem.status}
                </td>
                <td className="px-6 py-4 flex space-x-2">
                  <button
                    onClick={() => editTask(taskItem.id)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(taskItem.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => completeTask(taskItem.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
                  >
                    Complete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
