import axios from 'axios'
import { GET_ERRORS, SET_CURRENT_USER } from './types'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode';

// Register user
export const registerUser = (userData, history) => dispatch =>{
    axios.post('/api/users/register', userData).then(res =>  history.push('/login')).catch(err=> dispatch({
        type : GET_ERRORS,
        payload: err.response.data
    }))
};

// Login user
export const loginUser = userData => dispatch => {
    axios.post('/api/users/login', userData).then(res => {
    // save to local storage
        const {token} = res.data;
        //set token to ls
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // set current user
        dispatch(setCurrentUser(decoded))

    }).catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }));
};

// Set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from localstorage
    localStorage.removeItem('jwtToken');
    // Remove auth headrer for future requests
    setAuthToken(false);
    dispatch(setCurrentUser({}))
}