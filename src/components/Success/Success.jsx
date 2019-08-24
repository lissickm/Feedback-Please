import { connect } from 'react-redux';
import React, { Component } from 'react';

class Success extends Component {


    render() {

        return (
            <div>
                <h1>IN SUCCESS</h1>
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