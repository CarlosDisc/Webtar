import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import DropdownFilter from "../SearchResult/DropdownFilter";

import ArrowDown from '../../assets/arrows/arrow_down.png';
import Ex from '../../assets/ex.png';
import Map_Pin from '../../assets/map_pin.png';
import Categorie from '../../assets/categorie.png';
import SearchIcon from '../../assets/search_icon.png';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Categorías");
  const [selectedCity, setSelectedCity] = useState("Ciudad");
  const [selectedCountry, setSelectedCountry] = useState("País");

  const [showCategories, setShowCategories] = useState(false);
  const [showCities, setShowCities] = useState(false);
  const [showCountries, setShowCountries] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const categories = ["Tecnología", "Ropa", "Electrónica", "Hogar"];
  const cities = ["La Paz", "Santa Cruz", "Cochabamba", "Tarija"];
  const countries = ["Bolivia", "Argentina", "Chile", "Perú"];

  const navigate = useNavigate();
  const token = Cookies.get("token");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.append("query", searchTerm);
    if (selectedCategory !== "Categorías") params.append("category", selectedCategory);
    if (selectedCity !== "Ciudad") params.append("city", selectedCity);
    if (selectedCountry !== "País") params.append("country", selectedCountry);

    navigate(`/search?${params.toString()}`);
  };

  const separator = <div className="w-full h-px bg-gray-300 my-4 sm:w-px sm:h-6 sm:mx-4 sm:my-0"></div>;

  return (
    <div className="relative flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-md p-4 w-full">
      {/* Mobile toggle */}
      <div className="w-full flex justify-between sm:hidden mb-2">
        <span className="text-lg font-medium">Filtros</span>
        <button onClick={() => setShowMobileFilters(!showMobileFilters)}>
          <img
            src={ArrowDown}
            alt="Mostrar filtros"
            className={`w-5 h-5 transition-transform duration-300 ${showMobileFilters ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Filtros y barra de búsqueda */}
      <div className={`w-full flex-col ${showMobileFilters ? "flex" : "hidden"} sm:flex sm:flex-row sm:items-center`}>
        {token && (
          <>
            <div className="relative flex-1 w-full mb-2 sm:mb-0">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscador"
                className="h-12 pl-10 pr-12 text-lg text-gray-700 rounded-lg w-full sm:w-auto min-w-[200px] sm:min-w-[300px] focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300 ease-in-out"
              />
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <img src={Ex} alt="borrar" className="w-3 h-3" />
              </button>
            </div>
            {separator}
          </>
        )}

        {/* Dropdowns */}
        <div className="relative w-full sm:w-auto mb-2 sm:mb-0">
          <DropdownFilter
            icon={Categorie}
            options={categories}
            selected={selectedCategory}
            setSelected={setSelectedCategory}
            show={showCategories}
            setShow={setShowCategories}
            label="Categoría"
            mobile
          />
        </div>
        {separator}

        <div className="relative w-full sm:w-auto mb-2 sm:mb-0">
          <DropdownFilter
            icon={Map_Pin}
            options={cities}
            selected={selectedCity}
            setSelected={setSelectedCity}
            show={showCities}
            setShow={setShowCities}
            label="Ciudad"
            mobile
          />
        </div>

        {token && (
          <>
            {separator}
            <div className="relative w-full sm:w-auto mb-2 sm:mb-0">
              <DropdownFilter
                icon={Map_Pin}
                options={countries}
                selected={selectedCountry}
                setSelected={setSelectedCountry}
                show={showCountries}
                setShow={setShowCountries}
                label="País"
                mobile
              />
            </div>
          </>
        )}
      </div>

      {/* Botón de búsqueda siempre abajo en mobile */}
      <div className="w-full flex justify-center sm:justify-end mt-4 sm:mt-0">
        <button onClick={handleSearch} className="bg-[#63C3D1] text-white p-3 rounded-full shadow-md">
          <img src={SearchIcon} alt="Buscar" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
