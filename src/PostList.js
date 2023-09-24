// PostList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from './postsSlice';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);

    const handleMoreInfoClick = (post) => {

    };

    return (
        <div>
            <h1>Список постов</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button onClick={() => handleMoreInfoClick(post)}>More Info</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
