import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListdata } from "../Store/post-list-store";

const Post = ({ post }) => {
  
   const {deletePost} = useContext(PostListdata);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}>
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.description}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div className="alert alert-info reactions" role="alert">
          This post has been reacted by {post.reactions} people!
        </div>
      </div>
    </div>
  );
};

export default Post;
