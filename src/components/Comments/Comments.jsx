import { connect } from 'react-redux';
import React, { Component } from 'react';

class Comments extends Component {

    

    handleClick = () => {
        this.props.history.push('/review');
    }

    render() {

        return (
            <div>
                <h1>Do you have any comments that you would like to share with us?</h1>

                <br />

                <input type="text"/>

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