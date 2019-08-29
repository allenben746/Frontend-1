export const initialState = {
    bid: "Curent Bid",
    editing: false
};

export const bidReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_EDITING':
            return {
                ...state,
                editing: !state.editing
            };
        case 'UPDATE_BID':
            return {
                ...state,
                bid: action.payload,
                editing: !state.editing
            };


        default:

            return state;




    };


}