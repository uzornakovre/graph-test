import CytoscapeComponent from "react-cytoscapejs";
import styles from "./graph.module.scss";
import NodeInfo from "../node-info/node-info";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/api";
import { stylesheet } from "./stylesheet";

const Graph = () => {
  const [productData, setProductData] = useState<Array<any> | null>(null);
  const [predicatesList, setPredicatesList] = useState<Array<string>>([]);
  const [elements, setElements] = useState<Array<any>>([]);

  const setListeners = (cy: any) => {
    cy.on("tap", "node", function (evt: MouseEvent) {
      const node = evt.target as any;
      setPredicatesList(node._private.data.predicates);
    });
  };

  if (!productData) {
    fetchData().then((data) => {
      setProductData(data);
    });
  }

  useEffect(() => {
    if (productData) {
      let elems: Array<any> = [];
      productData.forEach((component: any) => {
        elems.push({
          data: {
            id: component.name,
            label: component.name,
            predicates: component.example_schema_predicates,
          },
        });

        component.example_schema_edges.forEach((edge: any) => {
          elems.push({
            data: {
              id: edge.name,
              label: edge.name,
              predicates: edge.example_schema_predicates,
            },
          });

          elems.push({
            data: {
              source: component.name,
              target: edge.name,
              label: edge["example_schema_edges|edge_name"],
            },
          });
        });
      });

      setElements(elems);
    }
  }, [productData]);

  return (
    <div className={styles.graph}>
      {elements.length && (
        <CytoscapeComponent
          layout={{ name: "cose" }}
          style={{
            width: "100%",
            height: "80vh",
          }}
          elements={elements}
          stylesheet={stylesheet}
          cy={(cy) => {
            setListeners(cy);
          }}
        />
      )}
      <NodeInfo list={predicatesList} />
    </div>
  );
};

export default Graph;
