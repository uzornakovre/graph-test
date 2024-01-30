import CytoscapeComponent from "react-cytoscapejs";
import styles from "./graph.module.scss";
import NodeInfo from "../node-info/node-info";
import { mockJSON } from "./example";
import { useState } from "react";

const stylesheet = [
  {
    selector: "node",
    style: {
      label: "data(label)",
      width: 10,
      height: 10,
    },
  },
  {
    selector: "edge",
    style: {
      label: "data(label)",
      width: 1,
    },
  },
  {
    selector: "node[label]",
    style: {
      label: "data(label)",
      "font-size": 4,
    },
  },
  {
    selector: "edge[label]",
    style: {
      label: "data(label)",
      "curve-style": "bezier",
      "font-size": 2,
    },
  },
];

const Graph = () => {
  const [predicatesList, setPredicatesList] = useState([]);
  const elements: Array<any> = [];

  const setListeners = (cy: any) => {
    cy.on("tap", "node", function (evt: MouseEvent) {
      const node = evt.target as any;
      setPredicatesList(node._private.data.predicates);
      console.log(node);
    });
  };

  mockJSON.forEach((component: any) => {
    elements.push({
      data: {
        id: component.name,
        label: component.name,
        predicates: component.example_schema_predicates,
      },
    });

    component.example_schema_edges.forEach((edge: any) => {
      elements.push({
        data: {
          id: edge.name,
          label: edge.name,
          predicates: edge.example_schema_predicates,
        },
      });

      elements.push({
        data: {
          source: component.name,
          target: edge.name,
          label: edge["example_schema_edges|edge_name"],
        },
      });
    });
  });

  // fetch("./example.json")
  //   .then((response) => {
  //     response.json();
  //   })
  //   .then((data: any) => {
  //     console.log(data);
  //     data.forEach((component: any) => {
  //       elements.push({
  //         data: {
  //           id: component.name,
  //           label: component.name,
  //         },
  //       });

  //       component.example_schema_edges.forEach((edge: any) => {
  //         elements.push({
  //           data: {
  //             id: edge.name,
  //           },
  //         });

  //         elements.push({
  //           data: {
  //             source: component.name,
  //             target: edge.name,
  //             lable: edge.name,
  //             // classes: "autorotate",
  //           },
  //         });
  //       });
  //     });

  // cy.add(elements);

  // cy.layout({ name: "cose" }).run();
  // });

  return (
    <div className={styles.graph}>
      <CytoscapeComponent
        elements={elements}
        style={{
          width: "100%",
          height: "80vh",
        }}
        stylesheet={stylesheet}
        layout={{ name: "cose" }}
        cy={(cy) => {
          setListeners(cy);
        }}
      />
      <NodeInfo list={predicatesList} />
    </div>
  );
};

export default Graph;
