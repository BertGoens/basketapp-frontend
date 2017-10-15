import { Auth } from '@/modules/auth'

/**
 * Initial Request configurations for different Request methods like GET, POST, ...
 */
const configGetRequest = {
  method: 'GET',
  headers: new Headers({
    Accept: 'application/json',
  }),
}

const configPostRequest = {
  method: 'POST',
  body: {},
  headers: new Headers({
    Accept: 'application/json',
  }),
}

const configPutRequest = {
  method: 'PUT',
  body: {},
  headers: new Headers({
    Accept: 'application/json',
  }),
}

const configDeleteRequest = {
  method: 'DELETE',
  body: {},
  headers: new Headers({
    Accept: 'application/json',
  }),
}

/**
 * Add body to the corresponding configuration
 * 
 * @param {Object} config - The initial configuration for a Request
 * @param {Object} body - The values that have to be passed along with the request
 * 
 * @returns {Object} newConfig - A shallow copy of the Request configuration with the body data appended to it
 * 
 */
const addBodyToConfig = (config, body) => {
  let newConfig = Object.assign({}, config)
  newConfig.body = body
  return newConfig
}

/**
 *  Add token to the Request configuration
 * 
 * @param {Object} config - The configuration object
 * 
 * @returns {Object} config - Returns an object with the token appended to the headers if the token has been set (a.k.a, if a user has been authenticated) 
 */
const addToken = config => {
  if (Auth.isUserAuthenticated()) {
    let token = Auth.getToken()
    config.headers.append('Authorization', 'Bearer ' + token)
  }
  return config
}

/**
 * 
 * @param {string} url
 * @param {Object} body - Required parameter for some Requests
 * 
 * @returns {Request} - GET_Request, POST_Request, PUT_Request, DELETE_Request
 *  
 */
export const GET_Request = url => new Request(url, addToken(configGetRequest))

export const POST_Request = (url, body) =>
  new Request(url, addToken(addBodyToConfig(configPostRequest, body)))

export const PUT_Request = (url, body) =>
  new Request(url, addToken(addBodyToConfig(configPutRequest, body)))

export const DELETE_Request = (url, body) =>
  new Request(url, addToken(addBodyToConfig(configDeleteRequest, body)))
