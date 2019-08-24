import { connect } from 'react-redux';
import React, { Component } from 'react';

class Support extends Component {

    state = {
        support: ''
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        })
    }

    handleClick = () => {
        if (this.state.support === '') {
            alert('Please choose an option before going to the next page!');
            return;
        }
        
        this.props.dispatch({ type: 'SUPPORT', payload: this.state.support});
        this.props.history.push('/comments');
    }

    render() {

        console.log(this.state);
        

        return (
            <div>
                <h1>How well are you being supported by Prime staff today?</h1>

                <br />

                <select name="ratings" defaultValue={'DEFAULT'} onChange={this.handleChange}>
                    <option value="DEFAULT" disabled> -- select an option -- </option>
                    <option value="1">1 (I feel abandoned.)</option>
                    <option value="2">2</option>
                    <option value="3">3 (feeling ok)</option>
                    <option value="4">4</option>
                    <option value="5">5 (I feel supported!)</option>
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