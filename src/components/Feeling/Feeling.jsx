import { connect } from 'react-redux';
import React, { Component } from 'react';
import '../App/App.css';

class Feeling extends Component {

    //set the local state to an empty string to clear old data
    state = {
        feeling: ''
    }

    // a function to handle the change in the option box
    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    // a function to dispatch a feeling action
    // send users to understanding page after click and dispatch
    // make sure the user has to enter a value before the click
    handleClick = () => {
        if(this.state.feeling  === '') {
            alert('Please choose an option before going to the next page!');
            return;
        }
        
        this.props.dispatch({ type: 'FEELING', payload: this.state.feeling });
        this.props.history.push('/understanding');
    }


    render() {

        console.log(this.state);

        return (
            <div>
                <div class="question">
                How are you feeling today?
                </div>
                <br />

                <select class="ratings" defaultValue={'DEFAULT'} onChange={this.handleChange}>
                    <option value="DEFAULT" disabled> -- select an option -- </option>
                    <option value="1">1 (very stressed)</option>
                    <option value="2">2</option>
                    <option value="3">3 (doing ok)</option>
                    <option value="4">4</option>
                    <option value="5">5 (feeling great!)</option>
                </select>
                <br/>

                <button className="btn btn-secondary btn-lg checkoutBtn" onClick={this.handleClick}>NEXT</button>

            </div >
        )



    }
}


// make the reduxstore available
const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Feeling);