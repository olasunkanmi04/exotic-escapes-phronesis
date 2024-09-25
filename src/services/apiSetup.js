import RebillyAPI from "rebilly-js-sdk";

const api = RebillyAPI({sandbox: true});

// const response =  api.account.signIn(payload);
const token = ''
console.log(api)

api.setSessionToken(token);

export default api;
