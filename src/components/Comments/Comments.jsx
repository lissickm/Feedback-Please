import { connect } from 'react-redux';
import React, { Component } from 'react';

class Comments extends Component {


    render() {

        return (
            <div>
                <h1>IN COMMENTS</h1>
            </div >
        )



    }
}



// const mapStateToProps = (reduxStore) => {
//     return {
//         state
//     }
// }

export default connect()(Comments);