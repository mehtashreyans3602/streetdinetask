import { configureStore } from '@reduxjs/toolkit';

import userReducer from '@/redux/reducers/userReducer';
import launchReducer from '@/redux/reducers/launchReducer';
import darkModeReducer from '@/redux/reducers/darkModeReducer';
export const store = configureStore({
	reducer: {
		user: userReducer,
		launch: launchReducer,
		darkMode: darkModeReducer,
	},
});
