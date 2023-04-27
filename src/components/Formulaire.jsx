const Formulaire = (props) => {
  return (
    <div className="app">
      <h1>Create account</h1>
      <form
        onSubmit={props.handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="fieldDescription">
          <p>Name</p>
          <input
            type="text"
            placeholder="Jean Dupont"
            onChange={(event) => {
              props.setName(event.target.value);
            }}
            value={props.name}
          />
        </div>
        <div className="fieldDescription">
          <p>Email</p>
          <input
            type="email"
            placeholder="jeandupont@lereacteur.io"
            onChange={(event) => {
              // event.target.value correspond au contenu de mon input
              // console.log(event.target.value);
              // Je stocke dans mon state le contenu de mon input
              props.setEmail(event.target.value);
            }}
            value={props.email}
          />
        </div>
        <div className="fieldDescription">
          <p>Password</p>
          <input
            type="password"
            placeholder="azerty"
            onChange={props.handlePasswordChange}
            value={props.password}
          />
        </div>

        <div className="fieldDescription">
          <p>Confirm your password</p>
          <input
            type="password"
            placeholder="azerty"
            onChange={props.handleConfirmPasswordChange}
            value={props.confirmPassword}
          />
        </div>
        {/* Cliquer sur ce bouton déclenche le onSubmit du formulaire */}
        {/* <input type="submit" value="Register" /> */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Formulaire;
