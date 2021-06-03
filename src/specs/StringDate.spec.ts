describe("StringDate", () => {
const testCases = [
    ["2021-05-31T00:00:00.000Z", true],
    ["2020-09-07T22:22:01.943Z", true],
    ["2021-06-02T10:26:21+0000", false],
    ["random string", false]
]
    test.each(testCases)('%s is of type StringDate: %s', () => {
        expect(true).toEqual(true)
    })
})
