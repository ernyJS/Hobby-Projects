import { useEffect, useState } from "react"
export default function LoginPanel({setIsLogged, isLogged}) {

//----- CONDITION'S ----------------

    let [switchToRegister, setSwitchToRegister] = useState(false);
    let [infoBar, setInfoBar] = useState("Account created...");
    let [infoBarClassname, setInfoBarClassname] = useState("infoBar")

    let [login, setLogin] = useState("");
    let [password, setPassword] = useState("");


    let [newLogin, setNewLogin] = useState("");
    let [newPassword, setNewPassword] = useState("");

//-------------------------------------------------------------------------------------------------------------- ACCOUNT'S DATABASE
    let [usersDb, setUsersDb] = useState(JSON.parse(localStorage.getItem('usersDb')) || []);
    let [passwordsDb, setPasswordsDb] = useState(JSON.parse(localStorage.getItem('passwordsDb')) || []);
    let [checkUsers, setCheckUsers] = useState([]);

    
    useEffect(() => {
        localStorage.setItem('usersDb', JSON.stringify(usersDb));
    }, [usersDb]);

    useEffect(() => {
        localStorage.setItem('passwordsDb', JSON.stringify(passwordsDb));
    }, [passwordsDb]);
//--------------------------------------------------------------------------------------------------------------
    function handleSwitchToRegister() {
        setSwitchToRegister(switchToRegister = true);
        setLogin("");
        setPassword("");
    }

    function handleSwitchToLogIn() {
        setSwitchToRegister(switchToRegister = false);
        setNewLogin("");
        setNewPassword("");
    }

    function handleLogIn() {
        usersDb.forEach((user, index) => {
            if(login === usersDb[index]){
                let num = index;
                if(password === passwordsDb[num]){
                    setIsLogged(isLogged = true);
                } else {
                    setInfoBar("The password is incorrect!")
                    setInfoBarClassname("infoBar-move");
                    setTimeout(() => {
                        setInfoBarClassname("infoBar")
                    }, 2100);
                }
            } else if(login !== usersDb[index]){
                setInfoBar(`Incorrect username or password!`)
                setInfoBarClassname("infoBar-move");
                setTimeout(() => {
                    setInfoBarClassname("infoBar")
                }, 2100);
            }
        });
    }

    function handleCreateNewAccount() {
        if(checkUsers.length === 0){
            setCheckUsers(checkUsers = usersDb.filter(user => newLogin.toLowerCase() === user.toLowerCase()))
            if(checkUsers.length === 1){
                setInfoBar("Username already exists!")
                setInfoBarClassname("infoBar-move");
                setTimeout(() => {
                    setInfoBarClassname("infoBar")
                }, 2100);
                setCheckUsers(checkUsers = []);
                return;
            } else if(newLogin.length < 5 || newPassword.length < 5){
                setInfoBar("Username and password should be at least 5 characters long!")
                setInfoBarClassname("infoBar-move");
                setTimeout(() => {
                    setInfoBarClassname("infoBar")
                }, 2100);
            } else {
                setUsersDb([...usersDb, newLogin]);
                setPasswordsDb([...passwordsDb, newPassword]);
                setNewLogin(newLogin => '');
                setNewPassword(newPassword => '')
                setSwitchToRegister(switchToRegister = false);
                setInfoBar("Account successfully created!")
                setInfoBarClassname("infoBar-move");
                setTimeout(() => {
                    setInfoBarClassname("infoBar")
                }, 2100);
            }
        }
    }




    return <main className="loginPanel">
        <div className="dot-one"></div>
        <div className="dot-two"></div>
        <div className="dot-three"></div>
        <div className="dot-four"></div>
        <div className="dot-five"></div>
        <div className="dot-six"></div>
        <section className="loginPanel-colorSide">
            <h1>H<span>O</span>MI<span>E</span></h1>
            <h2><span>D</span>AILY <span>M</span>ANAGMENT <span>S</span>YSTEM</h2>
        </section>
        <section className="loginPanel-loginSide">
            <div className={infoBarClassname}>{infoBar}</div>
            <div className={!switchToRegister ? "loginWindow" : "loginWindow-hidden"}>
                <p className="loginTitle"><span>L</span>O<span>G</span>IN P<span>AN</span>EL</p>
                <input className="loginInput" placeholder="Login" value={login} onChange={e => setLogin(e.target.value)}></input>
                <input className="loginInput" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                <button className="loginButton" onClick={handleLogIn}>Log In</button>
                <p className="loginInfo">No account yet? Don't worry, <span className="registerText" onClick={handleSwitchToRegister}>create new account.</span></p>
            </div>
            <div className={switchToRegister ? "registerWindow" : "registerWindow-hidden"}>
            <p className="loginTitle"><span>RE</span>GIS<span>TER</span> P<span>AN</span>EL</p>
                <input className="loginInput" placeholder="Enter your new login" value={newLogin} onChange={e => setNewLogin(e.target.value)}></input>
                <input className="loginInput" type="password" placeholder="Enter your new password" value={newPassword} onChange={e => setNewPassword(e.target.value)}></input>
                <button className="loginButton" onClick={handleCreateNewAccount}>Register</button>
                <p>I already have an account, <span className="registerText" onClick={handleSwitchToLogIn}>let's log in.</span></p>
            </div>
        </section>
    </main>
}