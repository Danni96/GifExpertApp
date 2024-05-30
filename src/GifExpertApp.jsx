import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["Solo leveling"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setcategories([newCategory, ...categories]);
    // console.log(newCategory);
  };

  return (
    <>
    <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />

      

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

