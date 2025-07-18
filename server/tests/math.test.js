function add(a, b) {
    return a + b;
}

test ("adds numbers", () => {
    expect(add(2, 3)).toBe(5);
});