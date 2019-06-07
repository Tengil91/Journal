export class LoginForm extends React.Component {
  render() {
    return React.createElement("form", null, React.createElement("div", {
      class: "form-group"
    }, React.createElement("label", {
      for: "exampleInputEmail1"
    }, "E-mail"), React.createElement("input", {
      type: "email",
      class: "form-control",
      id: "exampleInputEmail1",
      placeholder: "E-mail"
    })), React.createElement("div", {
      class: "form-group"
    }, React.createElement("label", {
      for: "exampleInputPassword1"
    }, "L\xF6senord"), React.createElement("input", {
      type: "password",
      class: "form-control",
      id: "exampleInputPassword1",
      placeholder: "L\xF6senord"
    })), React.createElement("button", {
      type: "submit",
      class: "btn btn-primary"
    }, "Logga in"));
  }

}