import { collection, Transaction } from "firebase/firestore"
import { useReducer } from "react"
import { appFireStore } from "../firebase/config"

const initState = {
    document: null,
    isPending: false,
    error: null,
    success: false,
}

const storeReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

// 데이터를 객체 형식으로 저장
//  저장 공간을 문서(document)라 부름 
// -> 여러 문서 저장하는 문서의 컨테이너: 컬렉션

// 저장할 컬렉션을 인자로 저장 
export const useFirestore = (transaction) => {

    const [response, dispatch] = useReducer(storeReducer, initState);

    //colRef : 컬렉션의 참조 요구 
    const colRef = collection(appFireStore, transaction);

    //컬렉션에 문서 추가
    const addDocument = () => {

    }

    //컬렉션에서 문서를 제거
    const deleteDocument = (id) => {

    }

    return { addDocument, deleteDocument, response }



}