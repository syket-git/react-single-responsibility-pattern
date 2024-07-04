import PostsContainer from "@/components/posts/PostsContainer";
import UsersContainer from "@/components/users/UsersContainer";

const UserProfile = () => {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-center mb-4">Dashboard</h2>
      <UsersContainer />
      <PostsContainer />
    </div>
  );
};

export default UserProfile;
