export const shorten = async (url) => {
  try {
    let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    let { result } = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
