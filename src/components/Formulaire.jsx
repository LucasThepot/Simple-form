import Footer from "./Footer";

const Formulaire = () => {
  return (
    <div className="app">
      <h1>Create account</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      ></form>
      <div className="fieldDescription">
        <p>Name</p>
        <input
          type="text"
          placeholder="Jean Dupont"
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
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
            setEmail(event.target.value);
          }}
          value={email}
        />
      </div>
      <div className="fieldDescription">
        <p>Password</p>
        <input
          type="password"
          placeholder="azerty"
          onChange={handlePasswordChange}
          value={password}
        />
      </div>

      <div className="fieldDescription">
        <p>Confirm your password</p>
        <input
          type="password"
          placeholder="azerty"
          onChange={handleConfirmPasswordChange}
          value={confirmPassword}
        />
      </div>
      {/* Cliquer sur ce bouton déclenche le onSubmit du formulaire */}
      {/* <input type="submit" value="Créer utilisateur" /> */}
      <button type="submit">Register</button>
      <Footer></Footer>
    </div>
  );
};

export default Formulaire;
