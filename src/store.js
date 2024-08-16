import { createStore } from "redux"; 

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
};

const initialStateCustomer = {
    fullName: '',
    nationalID: '',
    createdAt: '',
}
 
function accountReducer(state = initialStateAccount, action) {
    switch(action.type) {
        case "account/deposit":
            return {...state, balance: state.balance + action.payload};
        case "account/withdraw":
            return {...state, balance: state.balance - action.payload};
        case "account/requestLoan":
            if(state.loan > 0) return state;
            return {...state, loan: action.payload.amount, loanPurpose: action.payload.purpose, balance: state.balance + action.payload.amount}    
        case 'account/payLoan':
            return {...state, loan: 0, loanPurpose: "", balance: state.balance - state.loan}

        default: 
            return state;
    }

}

function customReducer(state = initialStateAccount) {

}

const store =  createStore(accountReducer)

store.dispatch({type: 'account/deposit', payload: 500})
store.dispatch({type: 'account/withdraw', payload: 200})
store.dispatch({type: 'account/requestLoan', payload: { amount: 1000, purpose: "Buy a car" },
})

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

function updateNme(fullName) {
    return { type: 'account/updateName', payload: fullName 
    }
}