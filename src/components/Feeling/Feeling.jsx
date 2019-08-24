import { connect } from 'react-redux';
import React, {Component} from 'react';

class Feeling extends Component {


    render() {

        return(
            <div>
                <h1>IN FEELING</h1>
            </div >
        )



    }
}



// const mapStateToProps = (reduxStore) => {
//     return {
//         state
//     }
// }

export default connect()(Feeling);