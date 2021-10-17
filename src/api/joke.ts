export async function apiFetchJoke() {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    return await res.json();
  } catch (e) {
    return e;
  }
};
