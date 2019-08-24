import { connect } from 'react-redux';
import React, { Component } from 'react';

class Review extends Component {

    

    render() {

        let feelingRating = this.props.reduxStore.feelingReducer.map((feeling) => {
            return (<p>{feeling}</p>)
        })

        let understandingRating = this.props.reduxStore.understandingReducer.map((understanding) => {
            return (<p>{understanding}</p>)
        })
       
        let supportRating = this.props.reduxStore.supportReducer.map((support) => {
            return (<p>{support}</p>)
        })

        let comments = this.props.reduxStore.commentsReducer.map((comment) => {
            return (<p>{comment}</p>)
        })

        return (
            <div>
                <h1>Review Your Feedback:</h1>
                <br/>
                
                <h3>feeling score: {feelingRating}</h3>
                <br/>

                <h3>understanding score: {understandingRating}</h3>
                <br/>

                <h3>support score: {supportRating}</h3>
                <br />

                <h3>comments: {comments}</h3>
                <br />

                <button>Submit</button>
                <br/>

                <code>{JSON.stringify(this.props.reduxStore)}</code>
            </div >
        )



    }
}



const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Review);