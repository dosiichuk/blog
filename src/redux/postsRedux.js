//selectors

//actions
const createActionName = (actionName) => `app/posts/${actionName}`;

//subreducer
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default postsReducer;
