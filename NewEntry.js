export let NewEntry = props => {
  return React.createElement("div", null, React.createElement("h1", null, "Skriv ett inl\xE4gg"), React.createElement("form", {
    action: ""
  }, React.createElement("input", {
    type: "text",
    placeholder: "Titel..."
  }), React.createElement("textarea", {
    placeholder: "Inl\xE4gg..."
  }), React.createElement("button", null, "Posta")));
};