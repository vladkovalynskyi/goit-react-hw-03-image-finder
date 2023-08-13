import React from 'react';
import css from './Searchbar.module.css'

export default function Searchbar({ onChange, onSubmit }) {
  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <button type="submit" className={css.searchForm_button}>
          <span className={css.searchForm_button_label}>Search</span>
        </button>
        <input
          className={css.searchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
        />
      </form>
    </header>
  );
}