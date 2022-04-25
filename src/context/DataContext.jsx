import { createContext, useReducer } from 'react';

// This is a way to create a namespace for the actions.
const SET_PROFILE = 'SET_PROFILE';
const SET_SOCIAL = 'SET_SOCIAL';

// This is a React Hook that creates a context object that is used to pass data down the component tree without having to pass props through each child.
export const DataContext = createContext();

// initial state
const initialState = {
	name: '',
	email: '',
	terms: false,
	policy: false,
	twitter: '',
	facebook: '',
};

console.log(initialState);
export const DataProvider = ({ children }) => {
	// reducer ➡ update the state of the form.
	const reducer = (
		state,
		{ type, payload: { name, email, terms, policy, twitter, facebook } }
	) => {
		switch (type) {
			case SET_PROFILE:
				return {
					...state,
					name,
					email,
					terms,
					policy,
				};
			case SET_SOCIAL:
				return {
					...state,
					twitter,
					facebook,
				};

			default:
				return state;
		}
	};

	// useReducer
	const [state, dispatch] = useReducer(reducer, initialState);

	// actions
	const setProfile = (payload) => dispatch({ type: SET_PROFILE, payload });
	const setSocial = (payload) => dispatch({ type: SET_SOCIAL, payload });

	return (
		<DataContext.Provider value={{ ...state, setProfile, setSocial }}>
			{children}
		</DataContext.Provider>
	);
};
