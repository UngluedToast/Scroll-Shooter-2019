import { MOVE_OBJECTS } from '../actions';
import moveObjects from './moveObjects';


const initialState = {
    angle: 45
    // message : ` It's easy to integrate React and Redux`,
};



function reducer(state = initialState, action) {
    switch (action.type) {
        case MOVE_OBJECTS:
            return moveObjects(state, action);
        default :
            return state;
    }
    // return state;
}




export default reducer;