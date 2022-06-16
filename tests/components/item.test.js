import React from "react";
import { render, screen  } from "@testing-library/react";
import Item from "../../src/components/item";

describe('Item component tests', () => {
    test("Proper data render", () => {
        const title = "title";
        const content = "content";

        render(<Item data={{ title, content  }} onDelete={jest.fn()} onSelect={jest.fn()} />);

        const titleComponent = screen.getByTestId("title");
        const contentComponent = screen.getByTestId("content");

        expect(titleComponent.textContent).toBe(title);
        expect(contentComponent.textContent).toBe(content);
    });
});