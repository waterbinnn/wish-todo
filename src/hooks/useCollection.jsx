import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { useState } from "react";
import { useEffect } from "react"
import { appFireStore } from "../firebase/config";


function useCollection(transaction, myQuery) {

    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let q;
        if (myQuery) {
            q = query(collection(appFireStore, transaction), where(...myQuery),
                orderBy("createdTime", "desc"));
        }

        const unsubscribe = onSnapshot(
            myQuery ? q :
                collection(appFireStore, transaction),
            (snapshot) => {
                //snapshot 에 doc이 배열 형태로 저장되어 있음 .

                let result = [];
                snapshot.docs.forEach((doc) => {
                    result.push({ ...doc.data(), id: doc.id });
                })

                setDocuments(result);
                setError(null);
            },
            (error) => {
                setError(error.message);
            }
        )
        return unsubscribe;
    }, [collection])

    return { documents, error }
}

export default useCollection