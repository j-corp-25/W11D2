import { createContext } from 'react';

export const SessionContext = createContext();

export const SessionProvider = props => {
    const [loggedInUser, setloggedInUser] = useState(false);

    return (
        <SessionContext.Provider value={{loggedInUser, setloggedInUser}}>
            {props.children}
        </SessionContext.Provider>
    )
}
