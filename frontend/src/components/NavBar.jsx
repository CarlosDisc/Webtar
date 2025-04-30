import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
	const navigate = useNavigate();
	const location = useLocation(); // Hook para obtener la ruta actual

	const handleNavigate = (path) => {
		navigate(path);
	};

	const navItems = [
		{ path: "/", label: "Inicio" },
		{ path: "/about_us", label: "Sobre Nosotros" },
		{ path: "/our_plans", label: "Nuestros Planes" },
		{ path: "/contact_us", label: "Contáctanos" },
	];

	return (
		<nav className="w-full mt-4 md:mt-0 flex justify-start md:flex-1">
			<div className="flex w-full md:w-auto justify-around md:justify-start md:space-x-6">
				{navItems.map((item) => (
					<button
						key={item.path}
						onClick={() => handleNavigate(item.path)}
						className={`font-medium text-sm text-center ${
							location.pathname === item.path
								? "text-black underline" // Estilo activo
								: "text-[#717070] hover:text-black"
						}`}>
						{item.label}
					</button>
				))}
			</div>
		</nav>
	);
};

export default NavBar;
