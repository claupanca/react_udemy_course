export default function Friend({ info, onSelectFriend }) {
  const friendName = info.name;
  const friendImg = info.image;
  const friendBalance = info.balance;
  const friendId = info.id;

  let message = "";
  if (friendBalance < 0) {
    message = `You owe ${friendName} ${Math.abs(friendBalance)}$`;
  } else if (friendBalance > 0) {
    message = `${friendName} owes you ${Math.abs(friendBalance)}$`;
  } else {
    message = `You and ${friendName} are even`;
  }

  return (
    <li>
      <img src={friendImg}></img>
      <h3>{friendName}</h3>
      <p className={friendBalance < 0 ? "red" : "green"}>{message}</p>
      <button className="button" onClick={() => onSelectFriend(friendId)}>
        Select
      </button>
    </li>
  );
}
