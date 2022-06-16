import React from "react";
import { mockUser } from '../mock/user';
import { render, screen, fireEvent  } from "@testing-library/react";
import EditUser from "../../src/components/editUser";

describe('EditUser component tests', () => {
    test("Proper data render", () => {
        const data = mockUser;

        const { asFragment } = render(
            <EditUser data={data} onConfirm={jest.fn()} onCancel={jest.fn()} />
        );

        const emailInput = screen.getByTestId("email");
        const confirmButton = screen.getByTestId("confirm");
        const cancelButton = screen.getByTestId("cancel");

        const newMail = "newmail@mail.com";
        fireEvent.change(emailInput, { target: { value: newMail } });

        expect(emailInput.value).toBe(newMail);

        fireEvent.click(confirmButton);
        fireEvent.click(cancelButton);

        expect(asFragment).toMatchSnapshot();
    });
});