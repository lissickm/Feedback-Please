import { connect } from 'react-redux';
import React, { Component } from 'react';

class Support extends Component {


    render() {

        return (
            <div>
                <h1>IN SUPPORT</h1>
            </div >
        )



    }
}



// const mapStateToProps = (reduxStore) => {
//     return {
//         state
//     }
// }

export default connect()(Support);