const {calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add} = require('../src/math')

test('Tip' , () => {
    const total = calculateTip(10, 0.3)

    expect(total).toBe(13)
}) 

test('Default tip', () => {
    const total = calculateTip(10)

    expect(total).toBe(12.5)
})

test('32 to 0', () => {
    const sw = fahrenheitToCelsius(32)

    expect(sw).toBe(0)
})

test('0 to 32', () => {
    const sw = celsiusToFahrenheit(0)

    expect(sw).toBe(32)
})

// test('Async functions', (done) => {

//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })

test('Async add', (done) => {
    add(2, 3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})

test("SHould add async await", async () => {
    const sum = await add(2, 3)

    expect(sum).toBe(5)
})