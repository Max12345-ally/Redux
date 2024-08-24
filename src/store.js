import { combineReducers, createStore } from "redux"; 



const initialStateCustomer = {
    fullName: '',
    nationalID: '',
    createdAt: '',
}
 


function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case 'customer/createCustomer':
            return {
                ...state, 
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt,
        };
        case 'customer/updateName':
            return {...state, fullName: action.payload};
        default: 
            return state;       
    }
}





function deposit(amount) {
    return {type: 'account/deposit', payload: amount}
}

function withdraw(amount) {
    return {type: 'account/withdraw', payload: amount}
}

function requestLoan(amount, purpose) {
    return {type: 'account/requestLoan', payload: { amount, purpose }
    }
}

function payloan() {
    return { type: 'account/payLoan'}
}


function createCustomer(fullName, nationalID) {
    return {
        type: 'customer/createCustomer', 
        payload: {fullName, nationalID, createdAt: new Date().toISOString()
        }
    }
}

function updateName(fullName) {
    return { type: 'account/updateName', payload: fullName 
    }
}

