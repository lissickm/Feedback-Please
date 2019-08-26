import { connect } from 'react-redux';
import React, { Component } from 'react';

class Success extends Component {

    // make a function that will send the user back to the original page after click
    handleClick = (event) => {
        this.props.history.push('/');
    }


    render() {

        return (
            <div>

                <div class="success">Your data has been submitted.</div>
                
                <div class="success">Thank You!</div>
                <br/>

                <button className="btn btn-secondary btn-lg checkoutBtn" onClick={this.handleClick}>Leave New Feedback</button>

            </div >
        )
    }
}


export default connect()(Success);