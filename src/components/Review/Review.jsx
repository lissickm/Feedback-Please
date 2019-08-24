import { connect } from 'react-redux';
import React, { Component } from 'react';

class Review extends Component {


    render() {

        return (
            <div>
                <h1>IN REVIEW</h1>
            </div >
        )



    }
}



// const mapStateToProps = (reduxStore) => {
//     return {
//         state
//     }
// }

export default connect()(Review);