import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { adsList } from "../mock/ads";
import AdItem from "../../src/components/adItem";

describe('AdItem component tests', () => {
    const data = adsList[0];

    test("Proper data render", () => {
        render(<AdItem data={data} onDelete={jest.fn()} onSelect={jest.fn()} />);

        const titleComponent = screen.getByTestId("title");
        const contentComponent = screen.getByTestId("content");
        const selectComponent = screen.getByTestId("select");
        const removeComponent = screen.getByTestId("remove");

        fireEvent(selectComponent, new MouseEvent('click'));
        fireEvent(removeComponent, new MouseEvent('click'));

        expect(titleComponent.textContent).toBe(data.title);
        expect(contentComponent.textContent).toBe(data.creation_date);
    });

    test("Snapshot", async () => {
        const { asFragment } = render(<AdItem data={data} onDelete={jest.fn()} onSelect={jest.fn()} />);
        expect(asFragment).toMatchSnapshot();
    });
});