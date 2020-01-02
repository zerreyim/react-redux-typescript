export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    // parse server side validation errors as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response has error");
}


export function handleError(error) {
  console.error("API call failed. " + error);
  throw error;
}
