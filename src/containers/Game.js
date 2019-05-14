import { connect } from 'react-redux'

import App from '../App';
import { moveObjects } from '../actions/index';

const mapDispatchToProps = dispatch => ({
    moveObjects: (mousePosition) => {
        dispatch(moveObjects(mousePosition));
    },
});

const mapStateToProps = state => ({
    angle: state.angle,
});


const Game = connect(
    mapStateToProps, 
    mapDispatchToProps,
)(App);

export default Game;