export function PostListClick({ posts }) {
  return (
    <>
      <ul>
        {posts.map((item) => (
          <div key={item.id}>
            <li>{item.title}</li>
            <li>{item.body}</li>
          </div>
        ))}
      </ul>
    </>
  );
}
