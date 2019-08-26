import { connect } from 'react-redux';
import React, { Component } from 'react';

class Understanding extends Component {

    //set the local state to an empty string to clear old data
    state = {
        understanding: ''
    }


    // a function to handle the change in the option box
    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }


    // a function to dispatch a understanding action
    // send users to support page after click and dispatch
    // make sure the user has to enter a value before the click
    handleClick = () => {
        if (this.state.understanding === '') {
            alert('Please choose an option before going to the next page!');
            return;
        }
        
        this.props.dispatch({type: 'UNDERSTANDING', payload: this.state.understanding});
        this.props.history.push('/support');
    }


    render() {

        console.log(this.state);
        
        return (
            <div>

                <div class="question">How well are you understanding the content?</div>
                <br />

                <select class="ratings" defaultValue={'DEFAULT'} onChange={this.handleChange}>
                    <option value="DEFAULT" disabled> -- select an option -- </option>
                    <option value="1">1 (I'm totally lost.)</option>
                    <option value="2">2</option>
                    <option value="3">3 (doing ok)</option>
                    <option value="4">4</option>
                    <option value="5">5 (I've got this!)</option>
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

export default connect(mapStateToProps)(Understanding);