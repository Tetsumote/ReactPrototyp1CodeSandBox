import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./styles.css";

import { TasksProvider } from "./context/TasksContext";

const App = () => {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
};

export default App;
