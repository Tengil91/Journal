export let style = {
  row: {
    display: "flex",
    flexWrap: "wrap"
  },
  col1: {
    flexBasis: "8.333333%",
    maxWidth: "8.333333%"
  },
  col2: {
    flexBasis: "16.666666%",
    maxWidth: "16.666666%"
  },
  comment: {
    background: '#ccf',
    border: '#fff 2px solid'
  },
  btn: {
    display: "inline-block",
    fontWeight: 400,
    color: "#212529",
    textAlign: "center",
    verticalAlign: "middle",
    userSelect: "none",
    backgroundColor: "transparent",
    border: "1px solid transparent",
    padding: ".375rem .75rem",
    fontSize: "1rem",
    lineHeight: "1.5",
    borderRadius: ".25rem",
    transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
  },
  btnPrimary: {
    color: "#fff",
    backgroundColor: "#007bff",
    borderColor: "#007bff"
  }
}
export function styleCombiner(arr){
  let returnStyles = {};
  arr.forEach(obj => {
    Object.entries(obj).forEach(pair => {
      returnStyles[pair[0]] = pair[1];
    });
  });
  return returnStyles;
}