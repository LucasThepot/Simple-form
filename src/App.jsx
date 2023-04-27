import { useState } from "react";
import "./App.css";
import Formulaire from "./components/Formulaire";

// Font Awesome //
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faKey, faListAlt);
/////////////////////////
/////////////////////////

function App() {
  // Ces 4 states sont relié aux input correspondants
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State qui gère l'affichage ou non d'un message d'erreur en dessous de mon bouton submit
  const [errorMessage, setErrorMessage] = useState("");

  // Fonction qui gère le onChange de l'input password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  // Fonction qui gère le onChange de l'input confirm password
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    // Empêche le rafraichissement par défault de la page
    event.preventDefault();
    // Vérifier que password et confirm password sont identiques
    if (password === confirmPassword) {
      // Je fais disparaître mon message d'erreur
      setErrorMessage("");
      // J'affiche une alerte
      alert("Bravo, vous avez créé un compte");
    } else {
      // Je donne comme nouvelle valeur à mon message d'erreur cette string
      setErrorMessage("Les mots de passe sont différents");
    }

    // Faire une requête à mon back pour créer un User
  };
  return <Formulaire></Formulaire>;
}

export default App;
