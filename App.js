import LoginPanel from './LoginPanel';
import AppPanel from './AppPanel';
import SpendingItem from './SpendingItem';
import { useState } from 'react';
export default function App() {

    const [isLogged, setIsLogged] = useState(true);

    return <div className='window'>
        {!isLogged ? <LoginPanel isLogged={isLogged} setIsLogged={setIsLogged}/> : <AppPanel isLogged={isLogged} setIsLogged={setIsLogged}/>}
    </div>
}