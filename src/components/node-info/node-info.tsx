import { FC } from "react";
import styles from "./node-info.module.scss";

interface INodeInfoProps {
  list: Array<string>;
}

const NodeInfo: FC<INodeInfoProps> = ({ list }) => {
  return (
    <div className={styles.node_info}>
      <ul className={styles.list}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default NodeInfo;
