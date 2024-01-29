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
    { data: { id: "one", label: "Node 1" }, position: { x: 100, y: 100 } },
    { data: { id: "two", label: "Node 2" }, position: { x: 500, y: 250 } },
    {
      data: {
        source: "one",
        target: "two",
        label: "label for this relationship",
      },
    },
  ];

  const setListeners = (cy: any) => {
    cy.on("tap", "node", function (evt: MouseEvent) {
      const node = evt.target as any;
      console.log(node._private.data.id);
    });
  };

  return (
    <CytoscapeComponent
      elements={elements}
      style={{ width: "75%", height: "80vh" }}
      stylesheet={stylesheet}
      cy={(cy) => {
        setListeners(cy);
      }}
    />
  );
};

export default Graph;
