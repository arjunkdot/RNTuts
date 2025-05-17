import axios from "axios";
import { firebaseAPiKey } from "../constants/keys";

export async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${firebaseAPiKey}`;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  const idToken = response.data.idToken;
  return idToken;
}

export async function createUser(email, password) {
  return await authenticate("signUp", email, password);
}

export async function login(email, password) {
  return await authenticate("signInWithPassword", email, password);
}
