import { connect } from 'react-redux';
import React, { Component } from 'react';

class Review extends Component {

    

    render() {

        let feelingRating = this.props.reduxStore.feelingReducer.map((feeling) => {
            return (<p>{feeling}</p>)
        })
       

        return (
            <div>
                <h1>Review Your Feedback:</h1>
                <br/>
                <h3>feeling score: {feelingRating}</h3>

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