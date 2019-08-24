import { connect } from 'react-redux';
import React, { Component } from 'react';

class Understanding extends Component {


    render() {

        return (
            <div>
                <h1>IN UNDERSTANDING</h1>
            </div >
        )



    }
}



// const mapStateToProps = (reduxStore) => {
//     return {
//         state
//     }
// }

export default connect()(Understanding);