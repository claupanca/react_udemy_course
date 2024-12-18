import { useState } from "react";

export default function SplitBillForm({ friendInfo, onSplitBill }) {
  console.log("friend", friendInfo);

  const friendName = friendInfo.name;
  const friendBalance = friendInfo.balance;

  const [bill, setBill] = useState();
  const [myExpense, setMyExpense] = useState();
  // const [friendExpense, setFriendExpense] = useState();
  const friendExpense = bill ? bill - myExpense : 0;
  const [payer, setPayer] = useState("me");

  function handleMyExpense(e) {
    setMyExpense((prevState) =>
      Number(e.target.value) > bill ? myExpense : Number(e.target.value)
    );
  }

  function handleSplitBill() {
    let result = 0;
    if (payer === "me") {
      console.log("friend imi e dator cu", friendExpense);
      console.log("balanta lui friend", friendBalance);
      console.log("friend ramane cu ", friendBalance + friendExpense);
      result = friendBalance + friendExpense;
    } else if (payer === "friend") {
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
        disabled
      ></input>
      <label>💵Who is paying the bill?</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="me">You</option>
        <option value="friend">{friendName}</option>
      </select>
      <button className="button" onClick={handleSplitBill}>
        Split Bill
      </button>
    </form>
  );
}
