import { useState } from "react";
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    // 에러 정보를 저장
    const [error, setError] = useState(null);
    // 현재 서버와 통신중인 상태를 저장
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = (email, password, displayName) => {
        setError(null); // 아직 에러가 없으니 null 입니다.
        setIsPending(true); // 통신중이므로 true입니다.

        // 비밀번호 설정으로 유저 정보를 등록
        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

                if (!user) {
                    throw new Error("회원가입에 실패했습니다.");
                }

                // 회원가입 후 유저 정보에 닉네임을 업데이트
                updateProfile(appAuth.currentUser, { displayName })
                    .then(() => {
                        dispatch({ type: "login", payload: user });
                        setError(null);
                        setIsPending(false);
                    })
                    .catch((err) => {
                        setError(err.message);
                        setIsPending(false);
                    });
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            });
    };

    return { error, isPending, signup };
};
