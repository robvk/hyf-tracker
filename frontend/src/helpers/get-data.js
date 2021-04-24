export async function getData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error();
  }

  const data = await response.json();

  return data;
}
