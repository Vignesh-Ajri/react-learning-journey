import { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task }]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-sm border w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Todo
          </h1>
          <p className="text-gray-500 text-sm">
            Stay organized, stay productive
          </p>
        </div>

        {/* Input Section */}
        <div className="relative mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            className="w-full px-4 py-3 pr-20 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
          />
          <button
            onClick={addTask}
            disabled={task.trim() === ""}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1.5 rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
          >
            Add
          </button>
        </div>

        {/* Tasks List */}
        <div className="space-y-2">
          {tasks.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No tasks yet. Add one above!
            </div>
          ) : (
            tasks.map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-md border"
              >
                <span className="text-gray-700">{t.text}</span>
                <button
                  onClick={() => deleteTask(t.id)}
                  className="text-red-500 hover:text-red-700 font-bold text-lg w-6 h-6 flex items-center justify-center"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {/* Task Count */}
        {tasks.length > 0 && (
          <div className="mt-6 text-center text-sm text-gray-500">
            {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
          </div>
        )}
      </div>
    </div>
  );
}
