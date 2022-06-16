import React from "react";
import { render, screen  } from "@testing-library/react";
import LoaderWrapper from "../../src/components/loaderWrapper";

describe('LoaderWrapper component tests', () => {
    test("Test", () => {
        const { asFragment } = render(<LoaderWrapper />);
        expect(asFragment).toMatchSnapshot();
    });
});