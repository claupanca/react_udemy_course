import chameleon from "./assets/img/chameleon.jpg";

function Avatar() {
  return (
    <div>
      <img src={chameleon} alt="chameleon image" className="avatar" />
    </div>
  );
}

export default Avatar;
