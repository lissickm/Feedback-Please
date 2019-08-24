import { connect } from 'react-redux';
import React, { Component } from 'react';

class Review extends Component {

    handleClick = (event) => {
        this.props.history.push('/success');
    }

    // state ={
    //     feeling: { this.props.reduxStore.feelingReducer[0] },
    //     understanding: { this.props.reduxStore.understandingReducer[0] },
    //     support: { this.props.reduxStore.supportReducer[0] },
    //     comments: { this.props.reduxStore.commentsReducer[0] }
    // }

    state = {
        feeling: '5',
        understanding: '2',
        support: '4'
        comments: 'here is some sample comments'

    }

    render() {

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

                <button onClick={this.handleClick}>Submit</button>
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