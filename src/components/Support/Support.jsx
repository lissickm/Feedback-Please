import { connect } from 'react-redux';
import React, { Component } from 'react';

class Support extends Component {


    handleClick = () => {
        this.props.history.push('/comments');
    }

    render() {

        return (
            <div>
                <h1>How well are you being supported by Prime staff today?</h1>

                <br />

                <select name="ratings">
                    <option value="option1">1 (I feel abandoned.)</option>
                    <option value="option2">2</option>
                    <option value="option3">3 (feeling ok)</option>
                    <option value="option4" selected>4</option>
                    <option value="option5">5 (I feel supported!)</option>
                </select>

                <button onClick={this.handleClick}>NEXT</button>

            </div >
        )



    }
}



const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Support);