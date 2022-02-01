//selectors
export const getAllCategories = ({ categories }) => categories;

//reducer
const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default categoriesReducer;
