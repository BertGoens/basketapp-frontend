import React from 'react';
import { Error } from '../error'

export class SettingsPage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: ''
      }
    };

    this.processForm = this.processForm.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const formData = ``;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/logout');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // Display login message
        console.log(xhr.response.message)

        localStorage.removeItem('user')

        // Make a redirect
        this.props.history.replace('/auth/login')

      } else {
        // failure

        // change the component state
        let errors
        if (xhr.response) {
          errors = xhr.response.errors ? xhr.response.errors : {};
          errors.summary = xhr.response.message;
        } else {
          errors = { summary: '🚧 Server unavailable. 🚧' }
        }
        console.log(errors)
        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }
  /**
 * Render the component.
 */
  render() {
    return (
      <div className="row s12">

        {this.state.errors && this.state.errors.message && <Error message={this.state.errors.message} />}

        <form action="/auth/logout" method="POST" onSubmit={this.processForm} className="col s12">
          <div className="input-field col s12 center-align">
            <button className="btn waves-effect waves-light" type="submit" name="action">Logout</button>
          </div>
        </form>
      </div>
    )
  }
}
