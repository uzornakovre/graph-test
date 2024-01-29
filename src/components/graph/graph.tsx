import CytoscapeComponent from "react-cytoscapejs";

const stylesheet = [
  {
    selector: "node[label]",
    style: {
      label: "data(label)",
    },
  },
  {
    selector: "edge[label]",
    style: {
      label: "data(label)",
      "curve-style": "bezier",
    },
  },
];

const Graph = () => {
  // example elements
  const elements = [
    { data: { id: "one", label: "Node 1" } },
    { data: { id: "two", label: "Node 2" } },
    {
      data: {
        source: "one",
        target: "two",
        label: "label for this relationship",
      },
    },
  ];

  const setListeners = (cy: any) => {
    // example cytoscape event listener
    cy.on("mouseover", "edge", (event: any) => {});
  };

  return (
    <CytoscapeComponent
      elements={elements}
      style={{ width: "95vw", height: "80vh" }}
      stylesheet={stylesheet}
      cy={(cy) => {
        setListeners(cy);
      }}
    />
  );
};

export default Graph;
