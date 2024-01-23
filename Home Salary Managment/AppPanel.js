import SpendingItem from "./SpendingItem";
import { useState, useEffect } from "react";
export default function AppPanel({isLogged, setIsLogged}){

    let [spendings, setSpendings] = useState(JSON.parse(localStorage.getItem('spendings')) || []);
    let [money, setMoney] = useState(JSON.parse(localStorage.getItem('money')) || 0);
    let [moneyForm, setMoneyForm] = useState("");
    let [spendMoney, setSpendMoney] = useState("");
    let [desc, setDesc] = useState("");

    useEffect(() => {
        localStorage.setItem('spendings', JSON.stringify(spendings));
    }, [spendings]);

    useEffect(() => {
        localStorage.setItem('money', JSON.stringify(money));
    }, [money]);


    function handleSalary(e) {
        e.preventDefault();
        setMoney(money => money = moneyForm);
        setMoneyForm("");
    }

    function handleAddItem(e) {
        e.preventDefault();
        setSpendings([...spendings, {name: desc, amount: spendMoney, id: Math.random()}])
        setSpendMoney("");
        setDesc("");
        setMoney(money => money - spendMoney);
    }

    function handleRemoveItem(id, amount){
        setSpendings(spendings => spendings.filter((item) => item.id !== id));
        setMoney(money => money + amount);
    }

























    return <div>
        <main className="app-panel">
        <section className="money-board">
            <h2>S<span>A</span>LA<span>R</span>Y M<span>AN</span>AGMEN<span>T</span></h2>
            <form className="salary-form" onSubmit={handleSalary}>
                <input placeholder="Enter your salary" type="number" value={moneyForm} onChange={e => setMoneyForm(Number(e.target.value))}></input>
                <button>OK</button>
            </form>
            <form className="spendings-form" onSubmit={handleAddItem}>
                <input placeholder="Enter the amount" type="number" value={spendMoney} onChange={e => setSpendMoney(Number(e.target.value))}></input>
                <input placeholder="What do you spend for?" value={desc} onChange={e => setDesc(e.target.value)}></input>
                <button>ADD</button>
            </form>
            <div className="spending-info">
                <p>MONEY TO SPEND: <span>{money}</span></p>
            </div>
            <div className="spending-box">
                <ul>{spendings.map(item => <SpendingItem item={item} handleRemoveItem={handleRemoveItem}/>)}</ul>
            </div>
        </section>
        <section className="activity-board"></section>
        </main>
    </div>
}