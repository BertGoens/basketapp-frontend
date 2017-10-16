import { Auth } from '@/modules'

export default class API_helpers {
  /**
    * Clear Errors
    */
  static clearErrors() {
    this.setState({
      errors: {},
    })
  }

  /**
    * Set errors
    * 
    * @param {Any} err - Set the errors for the ErrorMessage component 
    */
  static setErrors(err) {
    this.setState({
      errors: err,
    })
  }

  /**
   * Check if the Request was successful
   * 
   * @param {Response} response - Response object
   */
  static checkIfRequestHasBeenAllowed(response) {
    return new Promise((resolve, reject) => {
      API_helpers.clearErrors.call(this)
      if (response.status === 200) {
        resolve(response)
      } else {
        reject(response)
      }
    })
  }

  /**
   * Get the data from Response
   * 
   * @param {Response} response - Get the events data from Response.json() 
   */
  static getDataFromResponse(response) {
    return new Promise((resolve, reject) => {
      response
        .json()
        .then(data => resolve(data))
        .catch(() => reject(new Error("Couldn't get the data via Fetch.")))
    })
  }

  /**
   * Handle the errors if there were any
   * 
   * @param {Reponse} response - Response object 
   */
  static handleRequestErrors(response) {
    if (response.status === 401) {
      Auth.deauthenticateUser()
      this.props.history.push('/auth/login')
    } else {
      let error
      if (!response.statusText) {
        error = new Error('🚧 Server unavailable. 🚧')
      } else {
        error = response.statusText
      }
      API_helpers.setErrors.call(this, error)
    }
  }
}
