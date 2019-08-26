import { connect } from 'react-redux';
import React, { Component } from 'react';

class Support extends Component {

    //set the local state to an empty string to clear old data
    state = {
        support: ''
    }


    // a function to handle the change in the option box
    handleChange = (event) => {
        this.setState({
            support: event.target.value
        })
    }


    // a function to dispatch a support action
    // send users to comments page after click and dispatch
    // make sure the user has to enter a value before the click
    handleClick = () => {
        if (this.state.support === '') {
            alert('Please choose an option before going to the next page!');
            return;
        }
        
        this.props.dispatch({ type: 'SUPPORT', payload: this.state.support});
        this.props.history.push('/comments');
    }

    render() {

        console.log(this.state);
        

        return (
            <div>

                <div class="question">How well are you being supported by Prime staff today?</div>
                <br />

                <select class="ratings" name="ratings" defaultValue={'DEFAULT'} onChange={this.handleChange}>
                    <option value="DEFAULT" disabled> -- select an option -- </option>
                    <option value="1">1 (I feel abandoned.)</option>
                    <option value="2">2</option>
                    <option value="3">3 (feeling ok)</option>
                    <option value="4">4</option>
                    <option value="5">5 (I feel supported!)</option>
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

export default connect(mapStateToProps)(Support);