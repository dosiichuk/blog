import shortid from 'shortid';

const createActionName = (actionName) => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

//selectors
export const getAllPosts = ({ posts }) => posts;
export const getPostById = ({ posts }, postId) =>
  posts.find((post) => post.id === postId);

//actions creators
export const addPost = (payload) => ({
  type: ADD_POST,
  payload,
});

export const editPost = (payload) => ({ type: EDIT_POST, payload });

export const deletePost = (payload) => ({
  type: DELETE_POST,
  payload,
});

//subreducer
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, { id: shortid(), ...action.payload }];
    case EDIT_POST:
      return statePart.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );
    case DELETE_POST:
      return statePart.filter((post) => post.id !== action.payload);
    default:
      return statePart;
  }
};

export default postsReducer;
