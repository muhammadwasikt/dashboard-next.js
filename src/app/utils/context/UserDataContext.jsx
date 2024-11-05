"use client";
import { useEffect, useState, createContext } from 'react';
import { db, collection, getDocs } from '../../firebase.js';

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [name, setName] = useState([]);
    const [docId, setDocId] = useState([]);

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "email"));
        const names = [];
        const docIds = [];

        querySnapshot.forEach((doc) => {
            docIds.push(doc.id);
            names.push(doc.data());
        });

        setDocId(docIds);
        setName(names);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <UserDataContext.Provider value={{ name, docId }}>
            {children}
        </UserDataContext.Provider>
    );
};
