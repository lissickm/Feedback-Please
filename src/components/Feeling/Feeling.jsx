import { connect } from 'react-redux';
import React, { Component } from 'react';

class Feeling extends Component {

    state = {
        feeling: ''
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({ type: 'FEELING', payload: this.state.feeling });
        this.props.history.push('/understanding');
    }


    render() {

        console.log(this.state);


        return (
            <div>
                <h1>How are you feeling today?</h1>

                <br />

                <select name="ratings" defaultValue={'DEFAULT'} onChange={this.handleChange}>
                    <option value="DEFAULT" disabled> -- select an option -- </option>
                    <option value="1">1 (very stressed)</option>
                    <option value="2">2</option>
                    <option value="3">3 (doing ok)</option>
                    <option value="4">4</option>
                    <option value="5">5 (feeling great!)</option>
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

export default connect(mapStateToProps)(Feeling);