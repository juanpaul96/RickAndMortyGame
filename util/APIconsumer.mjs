import { response } from "express";
import { fetch } from "node-fetch";

export default Character;

const api = "rickandmortyapi.com/api/character";

(async () => {
  try {
    const res = await fetch(api);

    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }

    const user = await res.json();

    console.log(user);
  } catch (err) {
    console.error(err);
  }
})();
