import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import jumpTo from '../../../modules/Navigation';
import '../stylesheets/dropList.css';

export default function DropList({ department, categories, clickCategory }) {
  return (
    <NavDropdown title={department}>
      {categories &&
        categories.map(c => (
          <NavDropdown.Item
            onClick={() => {
              clickCategory(c.categoryName);
              jumpTo('/dashboard');
            }}
            key={c.categoryName}
          >
            {c.categoryName}
          </NavDropdown.Item>
        ))}
    </NavDropdown>
  );
}
