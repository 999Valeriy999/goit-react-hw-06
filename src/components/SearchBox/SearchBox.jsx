import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilter, selectFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter); 

  const handleSearch = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.label}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter} 
        onChange={handleSearch}
      />
    </div>
  );
}