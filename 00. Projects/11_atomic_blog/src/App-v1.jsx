import { createContext, useContext, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { PostProvider, usePosts } from "./PostProvider";
import { memo } from "react";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

//  The task in this Application was to UNDERSTANG THE initial code (with prop drilling)
//  and then use the CONTEXT API to get rid of prop drilling

// // 1.Create the Context
// const PostContext = createContext();

function App() {
  // will throw an error
  // const context = usePosts();

  // const [posts, setPosts] = useState(() =>
  //   Array.from({ length: 30 }, () => createRandomPost())
  // );
  // const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  // // Derived state. These are the posts that will actually be displayed
  // const searchedPosts =
  //   searchQuery.length > 0
  //     ? posts.filter((post) =>
  //         `${post.title} ${post.body}`
  //           .toLowerCase()
  //           .includes(searchQuery.toLowerCase())
  //       )
  //     : posts;

  // function handleAddPost(post) {
  //   setPosts((posts) => [post, ...posts]);
  // }

  // function handleClearPosts() {
  //   setPosts([]);
  // }

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    //  2. Provide Values to child Components
    // <PostContext.Provider
    //   value={{
    //     posts: searchedPosts,
    //     onAddPost: handleAddPost,
    //     onClearPosts: handleClearPosts,
    //     searchQuery: searchQuery,
    //     setSearchQuery: setSearchQuery,
    //   }}
    // >

    // we just use the newly created component
    <PostProvider>
      <section>
        <button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>

        <Header
        // posts={searchedPosts}
        // onClearPosts={handleClearPosts}
        // searchQuery={searchQuery}
        // setSearchQuery={setSearchQuery}
        />
        {/* <Main posts={searchedPosts} onAddPost={handleAddPost} /> */}
        <Main />
        {/* <Archive onAddPost={handleAddPost} /> */}
        <Archive />
        <Footer />
      </section>
    </PostProvider>
    // </PostContext.Provider>
  );
}

function Header() {
  // 3. Consume the Context Value
  const context = usePosts();
  const { onClearPosts } = context;

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results
        // posts={posts}
        />
        <SearchPosts
        // searchQuery={searchQuery}
        // setSearchQuery={setSearchQuery}
        />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

// function SearchPosts({ searchQuery, setSearchQuery }) {
function SearchPosts() {
  const context = usePosts();
  const { searchQuery, setSearchQuery } = context;

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

// function Results({ posts }) {
function Results() {
  const { posts } = usePosts();

  return <p>🚀 {posts.length} atomic posts found</p>;
}

function Main() {
  return (
    <main>
      {/* <FormAddPost onAddPost={onAddPost} /> */}
      <FormAddPost />
      {/* <Posts posts={posts} /> */}
      <Posts />
    </main>
  );
}

function Posts() {
  return (
    <section>
      {/* <List posts={posts} /> */}
      <List />
    </section>
  );
}

function FormAddPost() {
  const { onAddPost } = usePosts();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!body || !title) return;
    onAddPost({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button>Add post</button>
    </form>
  );
}

function List() {
  const { posts } = usePosts();

  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

const Archive = memo(function Archive() {
  // const { onAddPost } = usePosts();

  // Here we don't need the setter function. We're only using state to store these posts because the callback function passed into useState (which generates the posts) is only called once, on the initial render. So we use this trick as an optimization technique, because if we just used a regular variable, these posts would be re-created on every render. We could also move the posts outside the components, but I wanted to show you this trick 😉
  const [posts] = useState(() =>
    // 💥 WARNING: This might make your computer slow! Try a smaller `length` first
    Array.from({ length: 10000 }, () => createRandomPost())
  );

  const [showArchive, setShowArchive] = useState(false);

  return (
    <aside>
      <h2>Post archive</h2>
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              {/* <button onClick={() => onAddPost(post)}>Add as new post</button> */}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
});

function Footer() {
  return <footer>&copy; by The Atomic Blog ✌️</footer>;
}

export default App;
