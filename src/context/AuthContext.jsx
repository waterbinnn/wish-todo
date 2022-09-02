import { useReducer } from "react";
import { createContext } from "react";

//context 객체 생성
const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return { ...state, user: action.payload }
        case 'logout':
            return { ...state, user: null }
        default:
            return state;
    }
}

//context 를 구독할 컴포넌트의 묶음 범위를 설정
const AuthContextProvider = ({ children }) => {

    // 유저정보 관리 
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    });

    console.log(state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
export { AuthContext, AuthContextProvider }