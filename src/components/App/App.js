import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    clickToDispatch = (event) => {
        // DISPATCH HERE
        this.props.dispatch({
            type: 'WOOT',
        });
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Redux Introduction</h1>
                </header>

                <div>
                    <p>Help me Redux, you're my only hope.</p>
                    <button onClick={this.clickToDispatch}>Dispatch ME</button>
                </div>
            </div>
        );
    }
}

// currying
export default connect()(App);
