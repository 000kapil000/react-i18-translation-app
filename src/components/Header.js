import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
	const { i18n, t } = useTranslation(["common"]);
	const [selectedLanguage, setSelectedLanguage] = useState("en"); 


	useEffect(() => {
	  i18n.changeLanguage(selectedLanguage);
	}, [i18n, selectedLanguage]);
  
	const handleLanguageChange = (e) => {
	  const newLanguage = e.target.value;
	  setSelectedLanguage(newLanguage);
	};
	return (
		<nav className="upper-part navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				{t("Your all solutions here ")}
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
				<li className="nav-item ml-2">
						<Link className="nav-link" to="/about">
							{t("About")}
						</Link>
					</li>
					<li className="nav-item ml-2">
						<Link className="nav-link" to="/profile">
							{t("profile")}
						</Link>
					</li>
					<li className="nav-item">
						<select
							className="nav-link bg-dark border-0 ml-1 mr-2" value={selectedLanguage} onChange={handleLanguageChange}
						>
							<option value="en">English</option>
							<option value="fr">Français</option>
							<option value="es">spanish</option>
						</select>
					</li>

					
				</ul>
			</div>
		</nav>
	);
};

export default Header;