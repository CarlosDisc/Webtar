import React, { useState, useEffect } from "react";
import TarjetCompany from "../TarjetCompany";
import arrowLeft from "../../assets/arrows/arrow_left.png";
import arrowRight from "../../assets/arrows/arrow_right.png";
import newFolderIcon from "../../assets/MiniIcons_tarjet/new_folder_icon.png";
import favoriteIcon from "../../assets/MiniIcons_tarjet/favorite_icon.png";
import shareIcon from "../../assets/MiniIcons_tarjet/share_icon.png";
import icon from "../../images/icon.png";

const Destacados = () => {
	const bgs = ["#19d125", "#FF5733", "#4A90E2", "#9B59B6", "#F39C12", "#2ECC71", "#E74C3C", "#3498DB", "#9B53B6", "#F1C40F"];
	const [currentIndex, setCurrentIndex] = useState(0);
	const [slidesToShow, setSlidesToShow] = useState(3);
	const [hoveredIndex, setHoveredIndex] = useState(null);

	const tarjetData = [
		{
			bg: "#2181ff",
			textColor: "#0acf00",
		},
	];

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setSlidesToShow(1); // móviles
			} else if (window.innerWidth < 1024) {
				setSlidesToShow(2); // tablets
			} else {
				setSlidesToShow(3); // desktops
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev >= bgs.length - slidesToShow ? 0 : prev + 1));
		},3000); // Cambia cada 3 segundos

		return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
	}, [bgs.length, slidesToShow]);

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev === 0 ? bgs.length - slidesToShow : prev - 1));
	};

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev >= bgs.length - slidesToShow ? 0 : prev + 1));
	};

	return (
		<div className="w-full flex flex-col items-center relative">
			<h2 className="text-[#63C3D1] text-4xl font-bold mb-4">Nuestros Destacados</h2>

			<div className="relative w-[90%] max-w-6xl flex items-center justify-center">
				{/* Botón Izquierdo */}
				<button
					className="absolute left-2 sm:-left-12 top-1/2 transform -translate-y-1/2 p-2 bg-transparent z-10"
					onClick={prevSlide}
				>
					<img src={arrowLeft} alt="Flecha izquierda" className="w-10 h-10 opacity-70 hover:opacity-100 transition" />
				</button>

				{/* Carrusel */}
				<div className="relative w-full overflow-hidden">
					<div
						className="flex transition-transform duration-500 ease-in-out p-10"
						style={{ transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)` }}
					>
						{bgs.map((bg, index) => (
							<div key={index} className="flex-shrink-0 px-2" style={{ width: `${100 / slidesToShow}%` }}>
								<div
									className="relative border border-gray-200 rounded-lg shadow-lg group w-full aspect-[16/9] transition-all overflow-hidden"
									onMouseEnter={() => setHoveredIndex(index)}
									onMouseLeave={() => setHoveredIndex(null)}
								>
									<TarjetCompany
										bg={bg}
										icon={icon}
										redirectTo={"/perfil_tarjeta"}
										textColor={tarjetData[0].textColor}
									/>

									{/* Botones */}
									{hoveredIndex === index && (
										<div className="absolute top-4 right-4 flex flex-col space-y-3 z-10 pointer-events-auto">
											<button className="w-10 h-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
												<img src={newFolderIcon} alt="Guardar en carpeta" className="w-full h-full" />
											</button>
											<button className="w-10 h-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
												<img src={favoriteIcon} alt="Favorito" className="w-full h-full" />
											</button>
											<button className="w-10 h-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
												<img src={shareIcon} alt="Compartir" className="w-full h-full" />
											</button>
										</div>
									)}
								</div>
							</div>
						))}

					</div>
				</div>

				{/* Botón Derecho */}
				<button
					className="absolute right-2 sm:-right-12 top-1/2 transform -translate-y-1/2 p-2 bg-transparent z-10"
					onClick={nextSlide}
				>
					<img src={arrowRight} alt="Flecha derecha" className="w-10 h-10 opacity-70 hover:opacity-100 transition" />
				</button>
			</div>
		</div>
	);
};

export default Destacados;
