import { connect } from 'react-redux';
import React, { Component } from 'react';

class Comments extends Component {

    state = {
        comments: ''
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }


    handleClick = () => {
        this.props.dispatch({ type: 'COMMENTS', payload: this.state.comments });
        this.props.history.push('/review');
    }

    render() {

        return (
            <div>
                <h1>Do you have any comments that you would like to share with us?</h1>

                <br />

                <input type="text" onChange={this.handleChange} />

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

export default connect(mapStateToProps)(Comments);