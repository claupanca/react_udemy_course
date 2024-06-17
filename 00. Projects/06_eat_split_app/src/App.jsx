import { useState } from "react";

import FriendsList from "./FriendsList";
import AddForm from "./AddForm";
import SplitBillForm from "./SplitBillForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [listOfFriends, setListOfFriends] = useState(() => initialFriends);
  const [splitBill, setSplitBill] = useState(false);
  const [friend, setFriend] = useState({});

  function handleFriendAdd(friend) {
    setListOfFriends((prevState) => [...prevState, friend]);
  }

  function handleSelectFriend(friendId) {
    console.log("friendID", friendId);

    setFriend(
      (prevState) => listOfFriends.filter((friend) => friend.id === friendId)[0]
    );
    setSplitBill((prevState) => !prevState);
  }

  function handleSplitBill(info) {
    const infoId = info[0].id;
    const balanceee = info[1];

    console.log("info", info);
    console.log("info1", infoId);
    console.log("info2", balanceee);
    console.log(listOfFriends.filter((item) => item.id === infoId));
    setListOfFriends(
      listOfFriends.map((item) =>
        item.id === infoId ? { ...item, balance: balanceee } : item
      )
    );
  }

  console.log("list of friends", listOfFriends);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={listOfFriends}
          onAddFriend={handleFriendAdd}
          onSelectFriend={handleSelectFriend}
        />
      </div>
      {splitBill && (
        <SplitBillForm friendInfo={friend} onSplitBill={handleSplitBill} />
      )}
    </div>
  );
}

export default App;
