import { useState } from "react";

import AddForm from "./AddForm";
import Friend from "./Friend";

export default function FriendsList({ friends, onAddFriend, onSelectFriend }) {
  const [addForm, setAddForm] = useState(false);

  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            info={friend}
            onSelectFriend={onSelectFriend}
          />
        ))}
      </ul>
      {addForm && <AddForm onAddFriend={onAddFriend} />}
      <button
        className="button"
        onClick={() => setAddForm((prevState) => !prevState)}
      >
        {addForm ? "Close" : "Add Friend"}
      </button>
    </>
  );
}
