import { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-2 text-sm md:mb-4 md:text-xl">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="mb-2 w-72 border-2 border-solid border-green-300 text-sm md:text-xl"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <button>Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
