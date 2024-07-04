const PostsList = ({ posts }) => {
  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <div className="border min-h-40 p-5 border-gray-200" key={post.id}>
            <p>{post.id}</p>
            <p className="font-bold">{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
