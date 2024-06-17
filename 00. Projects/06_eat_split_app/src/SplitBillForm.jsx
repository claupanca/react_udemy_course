import { useState } from "react";

export default function SplitBillForm({ friendInfo, onSplitBill }) {
  console.log("friend", friendInfo);

  const friendName = friendInfo.name;
  const friendBalance = friendInfo.balance;

  const [bill, setBill] = useState();
  const [myExpense, setMyExpense] = useState();
  const [friendExpense, setFriendExpense] = useState();
  const [payee, setPayee] = useState("me");

  function handleMyExpense(e) {
    const myExpense = Number(e.target.value);

    setMyExpense((prevState) => myExpense);
    setFriendExpense((prevState) => bill - myExpense);
  }

  function handleSplitBill() {
    let result = 0;
    if (payee === "me") {
      console.log("friend imi e dator cu", friendExpense);
      console.log("balanta lui friend", friendBalance);
      console.log("friend ramane cu ", friendBalance + friendExpense);
      result = friendBalance + friendExpense;
    } else if (payee === "friend") {
      console.log("friend ramane cu", friendBalance - myExpense);
      result = friendBalance - myExpense;
    }

    onSplitBill([friendInfo, result]);
  }

  return (
    <form className="form-split-bill" onSubmit={(e) => e.preventDefault()}>
      <h2>Split a bill with {friendName}</h2>
      <label>💰Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      ></input>
      <label>🙈Your Expense</label>
      <input type="text" value={myExpense} onChange={handleMyExpense}></input>
      <label>🙉{friendName} Expense</label>
      <input
        type="text"
        value={friendExpense}
        // onChange={(e) => setFriendExpense(e.target.value)}
      ></input>
      <label>💵Who is paying the bill?</label>
      <select value={payee} onChange={(e) => setPayee(e.target.value)}>
        <option value="me">Me</option>
        <option value="friend">{friendName}</option>
      </select>
      <button className="button" onClick={handleSplitBill}>
        Split Bill
      </button>
    </form>
  );
}
