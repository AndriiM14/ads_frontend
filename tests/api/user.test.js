import axios from "axios";
import { mockUser } from '../mock/user';
import { createUser, getBootstrap, getUsers, getUser, deleteUser, changeUser } from "../../src/api/user";

jest.mock("axios");

describe("Testing createUser", () => {
    test("Successful request", async () => {
        axios.post.mockResolvedValueOnce(mockUser);
        const result = await createUser(mockUser);

        expect(result).toEqual(mockUser);
    });

    test("Fail request", async () => {
        const error = new Error("error");
        axios.post.mockRejectedValueOnce(error);

        try {
            await createUser(mockUser);
        } catch (e) {
            expect(e).toEqual(error);
        }
    });
});

describe("Testing getBootstrap", () => {
    test("Successful request", async () => {
        axios.get.mockResolvedValueOnce(mockUser);
        const result = await getBootstrap();

        expect(result).toEqual(mockUser);
    });

    test("Fail request", async () => {
        const error = new Error("error");
        axios.get.mockRejectedValueOnce(error);
        try {
            await getBootstrap();
        } catch (e) {
            expect(e).toEqual(error);
        }
    });
});

describe("Testing getUsers", () => {
    test("Successful request", async () => {
        axios.get.mockResolvedValueOnce([mockUser]);
        const result = await getUsers();

        expect(result).toEqual([mockUser]);
    });

    test("Fail request", async () => {
        const error = new Error("error");
        axios.get.mockRejectedValueOnce(error);
        try {
            await getUsers();
        } catch (e) {
            expect(e).toEqual(error);
        }
    });
});

describe("Testing getUser", () => {
    test("Successful request", async () => {
        axios.get.mockResolvedValueOnce(mockUser);
        const result = await getUser(1);

        expect(result).toEqual(mockUser);
    });

    test("Fail request", async () => {
        const error = new Error("error");
        axios.get.mockRejectedValueOnce(error);

        try {
            await getUser(1);
        } catch (e) {
            expect(e).toEqual(error);
        }
    });
});

describe("Testing deleteUser", () => {
    test("Successful request", async () => {
        axios.delete.mockResolvedValueOnce({id: 1});
        const result = await deleteUser(1);

        expect(result).toEqual({ id: 1 });
    });

    test("Fail request", async () => {
        const error = new Error("error");
        axios.delete.mockRejectedValueOnce(error);

        try {
            await deleteUser(1);
        } catch (e) {
            expect(e).toEqual(error);
        }
    });
});

describe("Testing changeUser", () => {
    test("Successful request", async () => {
        axios.put.mockResolvedValueOnce(mockUser);
        const result = await changeUser(mockUser);

        expect(result).toEqual(mockUser);
    });

    test("Fail request", async () => {
        const error = new Error("error");
        axios.put.mockRejectedValueOnce(error);

        try {
            await changeUser(mockUser);
        } catch (e) {
            expect(e).toEqual(error);
        }
    });
});
