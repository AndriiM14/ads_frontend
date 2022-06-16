import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { mockUser } from "../mock/user";
import UserItem from "../../src/components/userItem";

describe('AdItem component tests', () => {
    const data = mockUser;

    test("Proper data render", () => {
        render(<UserItem data={data} onDelete={jest.fn()} onSelect={jest.fn()} />);

        const titleComponent = screen.getByTestId("title");
        const contentComponent = screen.getByTestId("content");
        const selectComponent = screen.getByTestId("select");
        const removeComponent = screen.getByTestId("remove");

        fireEvent(selectComponent, new MouseEvent('click'));
        fireEvent(removeComponent, new MouseEvent('click'));

        expect(titleComponent.textContent).toBe(`${data.lastname} ${data.firstname}`);
        expect(contentComponent.textContent).toBe(`${data.country} ${data.city} ${data.address}`);
    });

    test("Snapshot", async () => {
        const { asFragment } = render(<UserItem data={data} onDelete={jest.fn()} onSelect={jest.fn()} />);
        expect(asFragment).toMatchSnapshot();
    });
});