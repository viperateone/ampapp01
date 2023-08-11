import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = { description: '' };
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        fetch(this.props.formAction, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({description: this.state.description})
        });

        this.setState({description: ''});
    }

    render() {
        return (
            <div className="App">
                <form
                    id="main-login"
                    action={this.props.action}
                    method={this.props.method}
                    onSubmit={this.onSubmit}>
                    <h2>Admin UI Login</h2>
                    <label>
                        <span class="text">user:</span>
                        <input type="email" name="email"/><br/>
                    </label>
                    <br/>
                    <label>
                        <span class="text">password:</span>
                        <input type="password" name="password"/><br/>
                    </label>
                    <br/>
                    <div class="align-right">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }

}

// App.propTypes = { action: React.PropTypes.string.isRequired, method: React.PropTypes.string}
App.defaultProps = {
    action: 'http://don.healthedata.com/admin/login',
    method: 'post'
};

module.exports = App;
