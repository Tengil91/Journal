export let Logout = props => {
  return React.createElement("div", null, React.createElement("p", null, "Du har loggat ut"), React.createElement("button", {
    onClick: props.onClick
  }, "Logga in"));
};