import axios from "axios";
import { adsList, userAds } from '../mock/ads';
import { getAds, getUserAds, postAd, deleteAd, changeAd } from "../../src/api/ads";

jest.mock("axios");

describe("Testing getAds", () => {
    test("Successful request", async () => {
        axios.get.mockResolvedValueOnce(adsList);
        const result = await getAds();

        expect(result).toEqual(adsList);
    });

    test("Fail request", async () => {
        const error = new Error("error");
        axios.get.mockRejectedValueOnce(error);
        try {
            await getAds();
        } catch (e) {
            expect(e).toEqual(error);
        }
    });
});

describe("Testing getUserAds", () => {
    test("Successful request", async () => {
        axios.get.mockResolvedValueOnce(userAds);
        const result = await getUserAds(1);

        expect(result).toEqual(userAds);
    });

    test("Fail request", async () => {
        const error = new Error("error");
        axios.get.mockRejectedValueOnce(error);
        try {
            await getUserAds(1);
        } catch (e) {
            expect(e).toEqual(error);
        }
    });
});

describe("Testing postAd", () => {
    test("Successful request", async () => {
        axios.post.mockResolvedValueOnce({ id: 1 });
        const result = await postAd(userAds[0]);

        expect(result).toEqual({ id: 1 });
    });

    test("Fail request", async () => {
        const error = new Error("error");
        axios.post.mockRejectedValueOnce(error);
        try {
            await postAd(userAds[0]);
        } catch (e) {
            expect(e).toEqual(error);
        }
    });
});

describe("Testing changeAd", () => {
    test("Successful request", async () => {
        axios.put.mockResolvedValueOnce({ id: 1 });
        const result = await changeAd(userAds[0]);

        expect(result).toEqual({ id: 1 });
    });

    test("Fail request", async () => {
        const error = new Error("error");
        axios.put.mockRejectedValueOnce(error);
        try {
            await changeAd(userAds[0]);
        } catch (e) {
            expect(e).toEqual(error);
        }
    });
});

describe("Testing deleteAd", () => {
    test("Successful request", async () => {
        axios.delete.mockResolvedValueOnce({id: 1});
        const result = await deleteAd(1);

        expect(result).toEqual({ id: 1 });
    });

    test("Fail request", async () => {
        const error = new Error("error");
        axios.delete.mockRejectedValueOnce(error);
        try {
            await deleteAd(1);
        } catch (e) {
            expect(e).toEqual(error);
        }
    });
});
