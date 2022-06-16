import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen  } from "@testing-library/react";
import { adsList } from "../mock/ads";
import Ad from "../../src/components/ad";

describe('Ad component tests', () => {
    test("Proper data render", () => {
        const data = adsList[0];

        render(
            <MemoryRouter>
                <Ad data={data} />
            </MemoryRouter>
        );

        const username = screen.getByTestId("username");
        const location = screen.getByTestId("location");
        const title = screen.getByTestId("title");
        const creationDate = screen.getByTestId("creation_date");


        expect(username.textContent).toBe(data.username);
        expect(location.textContent).toBe(data.location);
        expect(title.textContent).toBe(data.title);
        expect(creationDate.textContent).toBe(data.creation_date);
    });
});