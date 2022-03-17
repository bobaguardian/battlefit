import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import "./ExerciseSearchBar.css";

const ExerciseSearchBar = ({ query }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState(query);


  const updateSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleExerciseSearch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (searchQuery !== "")
      history.push(`/exercises/search/${searchQuery}`);

  }

  return (
    <div>
      <form className="exercise-search-form" onSubmit={handleExerciseSearch}>
        <input
          onChange={updateSearchQuery}
          value={searchQuery}
          className="search-bar"
          placeholder="Search an exercise by name"
        />
        <button className='search-submit' type='submit'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  )
}

export default ExerciseSearchBar;
