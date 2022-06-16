import showError from "../src/toast";

test("Test toast", () => {
    expect(showError).toBeDefined();

    showError({response: { data: {"error": "error"} } });
});