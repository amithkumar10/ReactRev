import React from 'react'
import {createContext} from 'react';

const AuthContext = createContext(null); // Initializing with null value means no user is logged in by default

export default AuthContext