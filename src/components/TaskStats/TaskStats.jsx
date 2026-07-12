import { useEffect, useState } from "react";
import { BarChart3 } from "lucide-react";
import "./TaskStats.css";
import { BASE_URL } from "../../server/constants";

const TaskStats = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch(`${BASE_URL}/todo`);
    const data = await response.json();
    setTasks(data);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === true).length;
  const remainingTasks = tasks.filter((task) => task.status === false).length;

  return (
    <div className="task-stats">
      <div className="task-stats-header">
        <BarChart3 className="stats-icon" size={22} />
        <h3>آمار کارها</h3>
      </div>

      <div className="stats-item">
        <span>همه کارها</span>
        <div className="circle purple">{totalTasks}</div>
      </div>

      <div className="stats-item">
        <span>تکمیل شده</span>
        <div className="circle green">{completedTasks}</div>
      </div>

      <div className="stats-item">
        <span> در حال انجام</span>
        <div className="circle orange">{remainingTasks}</div>
      </div>

      <div className="stats-item">
        <span>باقیمانده</span>
        <div className="circle red">{remainingTasks}</div>
      </div>
    </div>
  );
};

export default TaskStats;
