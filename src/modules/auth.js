export class Auth {
  /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {string} token for Authentication
     */
  static authenticateUser(token) {
    localStorage.setItem('token', token)
  }

  /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     *
     * @returns {boolean} Returns if user is signed in or not
     */
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null
  }

  /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     *
     */
  static deauthenticateUser() {
    localStorage.removeItem('token')
  }

  /**
     * Get a token value.
     *
     * @returns {string} Get the token from localStorage
     */

  static getToken() {
    return localStorage.getItem('token')
  }
}
