import { Auth } from "./";

export const apiRequest = method => {
  const apiInit = {
    method: method,
    headers: new Headers({
      Accept: "application/json",
      Token: Auth.getToken()
    })
  };

  return url => {
    return new Request(url, apiInit);
  };
};
