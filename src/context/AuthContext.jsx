import { useReducer, createContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { appAuth } from "../firebase/config";

//context 객체 생성
const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload };
        case "logout":
            return { ...state, user: null };
        case "isAuthReady":
            return { ...state, user: action.payload, isAuthReady: true };
        default:
            return state;
    }
};

//context 를 구독할 컴포넌트의 묶음 범위를 설정
const AuthContextProvider = ({ children }) => {
    // 유저정보 관리
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isAuthReady: false,
    });

    console.log(state);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(appAuth, (user) => {
            dispatch({ type: "isAuthReady", payload: user });
        });
        return unsubscribe;
    }, []);

    return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
export { AuthContext, AuthContextProvider };
