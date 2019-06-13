export let NewEntry = (props) => {
    return (
      <div>
        <h1>Skriv ett inlägg</h1>
        <form action="">
          <input type="text" placeholder="Titel..."/>
          <textarea placeholder="Inlägg..."></textarea>
          <button>Posta</button>
        </form>
      </div>
    );
}