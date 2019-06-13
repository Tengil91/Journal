export let LoginForm = (props) => {
    return (
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">E-mail</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="E-mail" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Lösenord</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Lösenord" />
        </div>
        <button type="submit" class="btn btn-primary">Logga in</button>
      </form>
    );
}