export function calculateCost(storage) {
    const rate = storage <= 10 ? 1 : storage <= 100 ? 2 : 3;

    return rate * storage * 100;
}