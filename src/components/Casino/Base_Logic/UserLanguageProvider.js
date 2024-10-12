import React, {createContext, useContext, useState} from "react";
import {useUser} from "./UserContext.js";

const LanguageProfile = createContext();

export const useLangProfile = () => {
    return useContext(LanguageProfile);
}

export const UserLanguageProvider = ({children}) => {
    const {user} = useUser();
    const [userLanguage, setUserLanguage] = useState(user.language);

    const handleSetUserLanguage = (new_language) => {
        setUserLanguage(new_language);
    }

    return (
        <LanguageProfile.Provider value={{userLanguage, setUserLanguage}}>
            {children}
        </LanguageProfile.Provider>
    );
}

export default UserLanguageProvider;