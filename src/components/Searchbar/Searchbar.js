import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';

import {
  Searchbox,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  const handlSearchChange = e => {
    const { value } = e.target;
    setQuery(value.trim());
  };
  return (
    <Searchbox>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <FcSearch size={20} />
        </SearchFormBtn>

        <SearchFormInput
          value={query}
          onChange={handlSearchChange}
          type="text"
          name="query"
          autocomplete="off"
          autoFocus
          placeholder="Search move"
        />
      </SearchForm>
    </Searchbox>
  );
};
export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
