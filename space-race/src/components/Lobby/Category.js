import React from "react";
import {category} from '../../categoryList';

const Category = () => {

  return (
    <div>
      <select name="category">
          {category.map((cat) => <option value={cat.name} key={cat.id}>{cat.name}</option>)}
      </select>
    </div>
  );
};

export default Category;
