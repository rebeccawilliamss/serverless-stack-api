const calculateCost = require("../libs/billing-lib");

test("Lower tier", () => {
    const storage = 10;

    const cost = 1000;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});

test("Middle tier", () => {
    const storage = 100;

    const cost = 20000;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});

test("Higher tier", () => {
    const storage = 101;

    const cost = 30300;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);

});