import React from "react";
import {category} from '../../categoryList';
import '../../App.css';

const Category = () => {

  return (
    <div>
      <select name="category" className="select">
          {category.map((cat) => <option value={cat.name} key={cat.id}>{cat.name}</option>)}
      </select>
    </div>
  );
};

export default Category;
