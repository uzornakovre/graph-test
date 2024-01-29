import Graph from "../graph/graph";
import Menu from "../menu/menu";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Menu />
      <Graph />
    </div>
  );
}

export default App;
