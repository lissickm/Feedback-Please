import { connect } from 'react-redux';
import React, { Component } from 'react';

class Success extends Component {

    handleClick = (event) => {
        this.props.history.push('/');
    }

    render() {

        return (
            <div>
                <h1>Your data has been submitted</h1>
                <br/>
                <h1>Thank You!</h1>
                <br/>
                <button onClick={this.handleClick}>Leave New Feedback</button>
            </div >
        )



    }
}



// const mapStateToProps = (reduxStore) => {
//     return {
//         state
//     }
// }

export default connect()(Success);