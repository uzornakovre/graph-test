export const stylesheet = [
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
