import axios from "axios";
import { mockUser } from "../mock/user";
import auth from "../../src/api/auth";

jest.mock("axios");

describe("Testing auth", () => {
    test("Successful request", async () => {
        axios.post.mockResolvedValueOnce(mockUser);
        const result = await auth(mockUser);

        expect(result).toEqual(mockUser);
    });

    test("Fail request", async () => {
        const error = new Error("error");
        axios.post.mockRejectedValueOnce(error);

        try {
            await auth(mockUser);
        } catch (e) {
            expect(e).toEqual(error);
        }
    });
});

