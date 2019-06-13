export let CommentForm = (props) => {
    if(props.user.loggedIn){
      return (
        <form action="">
          <input type="text" placeholder="kommentera inlägg" />
          <button>Posta</button>
        </form>
      );
    } else {
      return <p>logga in för att skriva</p>;
    }
}