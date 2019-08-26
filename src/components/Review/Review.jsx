import { connect } from 'react-redux';
import React, { Component } from 'react';
import axios from 'axios';

class Review extends Component {

    // pull the information we need to display from redux store
    state = {
        feeling: this.props.reduxStore.feelingReducer[0],
        understanding: this.props.reduxStore.understandingReducer[0],
        support: this.props.reduxStore.supportReducer[0],
        comments: this.props.reduxStore.commentsReducer[0]
    }

    // a function to call a function to run a post route
    // send users to success page after click
    handleClick = (event) => {
        this.addFeedback();
        this.props.history.push('/success');
    }

    // make a post request to the server using axios
    addFeedback() {
        axios.post('/feedback', this.state)
            .then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
    }

    render() {

        // *** I originally used .map, but changed my mind
        // *** I thought that it didn't make sense if the array only had 1 number

        // let feelingRating = this.props.reduxStore.feelingReducer.map((feeling) => {
        //     return (<p>{feeling}</p>)
        // })

        // let understandingRating = this.props.reduxStore.understandingReducer.map((understanding) => {
        //     return (<p>{understanding}</p>)
        // })
       
        // let supportRating = this.props.reduxStore.supportReducer.map((support) => {
        //     return (<p>{support}</p>)
        // })

        // let comments = this.props.reduxStore.commentsReducer.map((comment) => {
        //     return (<p>{comment}</p>)
        // })

        return (
            <div>

                <h1>Review Your Feedback:</h1>
                <br/>
                
                <h3>feeling score: {this.props.reduxStore.feelingReducer[0]}</h3>
                <br/>

                <h3>understanding score: {this.props.reduxStore.understandingReducer[0]}</h3>
                <br/>

                <h3>support score: {this.props.reduxStore.supportReducer[0]}</h3>
                <br />

                <h3>comments: {this.props.reduxStore.commentsReducer[0]}</h3>
                <br />

                <button id="reviewbtn" className="btn btn-secondary btn-lg checkoutBtn" onClick={this.handleClick}>Submit</button>
            
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

export default connect(mapStateToProps)(Review);