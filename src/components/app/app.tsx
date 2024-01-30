import { Route, Routes } from "react-router";
import Graph from "../graph/graph";
import Menu from "../menu/menu";
import styles from "./app.module.scss";
import Metrics from "../metrics/metrics";

function App() {
  return (
    <div className={styles.app}>
      <Menu />
      <Routes>
        <Route path="/" element={<Graph />} />
        <Route path="/metrics" element={<Metrics />} />
      </Routes>
    </div>
  );
}

export default App;
