import React, { createContext, useState } from 'react';

export const DataContex = createContext ();
const DataProvider = ({children}) => {

    const [contacts, setContacts]=useState([]);
    const [search,setSearch] = useState("");
    const [sortValue,setSortValue]= useState('');


    const dataInfo = {

        contacts,
        search,
        sortValue,
        setContacts,
        setSearch,
        setSortValue

    }
    return (
        <DataContex.Provider value={dataInfo}>
            {children}
        </DataContex.Provider>
    );
};

export default DataProvider;