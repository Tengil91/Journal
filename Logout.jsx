export let Logout = (props) => {
    return (
      <div>
        <p>Du har loggat ut</p>
        <button onClick={props.onClick}>Logga in</button>
      </div>
    );
}