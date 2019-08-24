import { connect } from 'react-redux';
import React, { Component } from 'react';

class Understanding extends Component {


    render() {

        return (
            <div>
                <h1>How well are you understanding the content?</h1>

                <br />

                <select name="ratings">
                    <option value="option1">1 (I'm totally lost.)</option>
                    <option value="option2">2</option>
                    <option value="option3">3 (doing ok)</option>
                    <option value="option4" selected>4</option>
                    <option value="option5">5 (I've got this!)</option>
                </select>

                <button>NEXT</button>

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