import React, { useState } from "react";
import { Dropdown } from "./presentation/components";

function App() {
	const [selectedWeapon, setSelectedWeapon] = useState(null);

	return (
		<div className="App">
			<div>
				{selectedWeapon && <div>Vem pro pau com sua {selectedWeapon}</div>}
			</div>
			<Dropdown
				title="Choose your weapon"
				options={["Sword", "Shield", "Katana", "Spear", "mãe aquela gorda"]}
				// eslint-disable-next-line no-console
				onSelect={(e) => setSelectedWeapon(e)}
			/>
		</div>
	);
}

export default App;
