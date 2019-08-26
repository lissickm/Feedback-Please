import { connect } from 'react-redux';
import React, { Component } from 'react';

class Comments extends Component {

    //set the local state to an empty string to clear old data
    state = {
        comments: ''
    }

    // make a function that activates after the comments are entered
    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    // a function to handle dispatching an action after submitting comments
    // route the user to the review page
    // it's ok if the user doesn't enter comments
    handleClick = () => {
        this.props.dispatch({ type: 'COMMENTS', payload: this.state.comments });
        this.props.history.push('/review');
    }

    render() {

        return (
            <div>
                <div class="question">Do you have any comments that you would like to share with us?</div>

                <br />

                <input class="review" type="text" onChange={this.handleChange} />

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

export default connect(mapStateToProps)(Comments);