import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("Solo leveling");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Buscar gifs"
          onChange={onInputChange}
        />
      </form>
    </>
  );

  // validar la props de setcategories
};

// AddCategory.propTypes = {
//   onNewCategory: PropTypes.string.isRequired,
// };
