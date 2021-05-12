import {ORDER_SENT,ORDER_PENDING} from '../redux/orderConstants'

export const orderReducer=(state = {}, action) =>{

    switch(action.type)
    {
        case ORDER_SENT:
            return {
                sent: true,
                order:action.payload
            }

        case ORDER_PENDING:

            return {
                sent:false
            }
            default:
                return state;
        
    }
}