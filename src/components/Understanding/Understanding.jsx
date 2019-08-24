import { connect } from 'react-redux';
import React, { Component } from 'react';

class Understanding extends Component {

    state = {
        understanding: ''
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    handleClick = () => {
        if (this.state.understanding === '') {
            alert('Please choose an option before going to the next page!');
            return;
        }
        
        this.props.dispatch({type: 'UNDERSTANDING', payload: this.state.understanding});
        this.props.history.push('/support');
    }

    render() {

        console.log(this.state);
        
        return (
            <div>
                <h1>How well are you understanding the content?</h1>

                <br />

                <select name="ratings" defaultValue={'DEFAULT'} onChange={this.handleChange}>
                    <option value="DEFAULT" disabled> -- select an option -- </option>
                    <option value="1">1 (I'm totally lost.)</option>
                    <option value="2">2</option>
                    <option value="3">3 (doing ok)</option>
                    <option value="4">4</option>
                    <option value="5">5 (I've got this!)</option>
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

export default connect(mapStateToProps)(Understanding);