import { createContext, useContext, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";

// 1.Create the Context
const PostContext = createContext();

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function PostProvider({ children }) {
  // 2. Move everything into this component
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  //  memoized value OBJECT for the context
  const value = useMemo(() => {
    return {
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery,
    };
  }, []);

  return (
    <PostContext.Provider
      // we memoize this as an optimization
      // value={{
      //   posts: searchedPosts,
      //   onAddPost: handleAddPost,
      //   onClearPosts: handleClearPosts,
      //   searchQuery: searchQuery,
      //   setSearchQuery: setSearchQuery,
      // }}
      value={value}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("PostContext was used outside of PostProvider");
  }
  return context;
}

// export { PostProvider, PostContext };
export { PostProvider, usePosts };
