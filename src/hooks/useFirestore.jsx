import { addDoc, collection, Transaction } from "firebase/firestore"
import { useReducer } from "react"
import { appFireStore, timeStamp } from "../firebase/config"

const initState = {
    document: null,
    isPending: false,
    error: null,
    success: false,
}

const storeReducer = (state, action) => {
    switch (action.type) {
        case 'isPending':
            return { isPending: true, document: null, success: false, error: null }
        case 'addDoc':
            return { isPending: false, document: action.payload, success: true, error: null }
        case 'error':
            return { isPending: false, document: null, success: false, error: action.payload }

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
    const addDocument = async (doc) => {
        dispatch({ type: "isPending" });

        try {
            const createdTime = timeStamp.fromDate(new Date());
            const docRef = await addDoc(colRef, { ...doc, createdTime });
            console.log(docRef);

            dispatch({ type: "addDoc", payload: docRef });
        }
        catch (error) {
            dispatch({ type: "error", payload: error.message });
        }
    }

    //컬렉션에서 문서를 제거
    const deleteDocument = (id) => {

    }

    return { addDocument, deleteDocument, response }



}