import { createContext, useState } from "react";

export const BookmarksContext = createContext({
  ids: [],
  addBookmark: (id) => {},
  removeBookmark: (id) => {},
});

export const BookmarksContextProvider = ({ children }) => {
  const [bookmarkMealsIds, setBookmarkMealsIds] = useState([]);

  const addBookmark = (id) => {
    setBookmarkMealsIds((prev) => [...prev, id]);
  };

  const removeBookmark = (id) => {
    setBookmarkMealsIds((prev) => prev.filter((mealId) => mealId !== id));
  };

  const value = {
    ids: bookmarkMealsIds,
    addBookmark,
    removeBookmark,
  };

  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
};
