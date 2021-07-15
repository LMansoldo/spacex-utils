import React from "react";
import { screen, render, userEvent } from "../../../tests";
import Dropdown from "./index";

const title = "Weapons";
const options = ["Sword", "Spear"];

describe("Dropdown", () => {
	it("Should start closed", () => {
		render(<Dropdown title={title} options={options} onSelect={() => {}} />);

		expect(screen.queryByText(options[0])).not.toBeInTheDocument();
		expect(screen.queryByText(options[1])).not.toBeInTheDocument();
	});

	it("Should show options when open", () => {
		render(<Dropdown title={title} options={options} onSelect={() => {}} />);

		expect(screen.queryByText(options[0])).not.toBeInTheDocument();
		expect(screen.queryByText(options[1])).not.toBeInTheDocument();

		const dropdownButton = screen.getByRole("button", { name: title });
		userEvent.click(dropdownButton);

		expect(
			screen.getByRole("menuitem", { name: options[0] })
		).toBeInTheDocument();
		expect(
			screen.getByRole("menuitem", { name: options[1] })
		).toBeInTheDocument();
	});

	it("Should signal when option is selected and close dropdown", () => {
		const onSelect = jest.fn();

		render(<Dropdown title={title} options={options} onSelect={onSelect} />);

		const dropdownButton = screen.getByRole("button", { name: title });
		userEvent.click(dropdownButton);

		const option0 = screen.getByRole("menuitem", { name: options[0] });
		const option1 = screen.getByRole("menuitem", { name: options[1] });

		expect(option0).toBeInTheDocument();
		expect(option1).toBeInTheDocument();

		userEvent.click(option0);

		expect(onSelect).toHaveBeenCalledWith(options[0]);

		expect(screen.queryByText(options[0])).not.toBeInTheDocument();
		expect(screen.queryByText(options[1])).not.toBeInTheDocument();
	});
});
