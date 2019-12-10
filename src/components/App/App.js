import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class App extends Component {
    state = {
        dog: '',
        cat: '',
    }

    clickToDispatch = (event) => {
        // DISPATCH HERE
        this.props.dispatch({
            type: 'WOOT_ONE',
        });
        this.props.dispatch({
            type: 'WOOT_TWO',
        });
    }

    addDog = (event) => {
        this.props.dispatch({
            type: 'ADD_DOG',
            payload: this.state.dog
        })
    }

    addCat = (event) => {
        this.props.dispatch({
            type: 'ADD_CAT',
            payload: this.state.cat
        })
    }

    changeAnimalField = (event, animal) => {
        this.setState({
            [animal]: event.target.value,
        })
    }

    render() {
        // console.log('catReducer: ', this.props.store.catReducer);
        // console.log('dogReducer: ', this.props.store.dogReducer);
        const catElements = this.props.store.catReducer.map((item, index) => {
            return <li key={index}>{item}</li>
        });
        const dogElements = this.props.store.dogReducer.map((item, index) => {
            return <li key={index}>{item}</li>
        });
        return (
            <div>
                <header>
                    <h1>Redux Introduction</h1>
                </header>

                <div>
                    <input
                        placeholder="Dog's Name"
                        type="text"
                        onChange={(event) => this.changeAnimalField(event, 'dog')}
                    />
                    <button onClick={this.addDog}>Add Dog</button>
                </div>

                <div>
                    <input
                        placeholder="Cat's Name"
                        type="text"
                        onChange={(event) => this.changeAnimalField(event, 'cat')}
                    />
                    <button onClick={this.addCat}>Add Cat</button>
                </div>

                <div>
                    <p>Help me Redux, you're my only hope.</p>
                    <button onClick={this.clickToDispatch}>Dispatch ME</button>
                </div>

                <h2>Dog List</h2>
                <ul>
                    {/* RENDER DOGS */}
                    {dogElements}
                </ul>

                <h2>Cat List</h2>
                <ul>
                    {/* RENDER CATS */}
                    {catElements}
                </ul>
            </div>
        );
    }
}

// currying
export default connect(mapStoreToProps)(App);
