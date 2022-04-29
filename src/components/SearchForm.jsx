import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchForm = () => {
	const navigate = useNavigate();
	const [search, setSearch] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

		navigate("/search?q=" + search);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" onChange={(e) => setSearch(e.target.value)} />
			<input type="submit" value="Buscar" />
		</form>
	);
};

export default SearchForm;
