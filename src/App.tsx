import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { withProvider } from "./App.state";

const App = () => {
  return <Dashboard />;
};

export default withProvider(App);
