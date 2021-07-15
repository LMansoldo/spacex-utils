import React from "react";
import PropTypes from "prop-types";
/* 
	1. Dropdown começa fechado
	2. Quero que o dd mostre opções
	3. Quando selecionar um item, fechar e indicar o selecionado
*/
const Dropdown = ({ title, options, onSelect }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleSelection = (option) => {
		onSelect(option);
		setIsOpen(false);
	};

	return (
		<div className="c-dropdown">
			<button type="button" onClick={() => setIsOpen((o) => !o)}>
				{title}
			</button>
			{isOpen && (
				<ul role="menu">
					{options.map((option) => (
						<li
							key={option}
							role="menuitem"
							onClick={() => handleSelection(option)}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

Dropdown.propTypes = {
	title: PropTypes.string.isRequired,
	options: PropTypes.node.isRequired,
	onSelect: PropTypes.func.isRequired,
};

export default Dropdown;
