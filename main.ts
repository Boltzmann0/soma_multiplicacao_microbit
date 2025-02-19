let numero1 = 0
let numero2 = 0
let resultado = 0
input.onButtonPressed(Button.A, function () {
    numero1 = randint(1, 10)
    numero2 = randint(1, 10)
    basic.showNumber(numero1)
    basic.pause(100)
    basic.showNumber(numero2)
})
input.onButtonPressed(Button.AB, function () {
    resultado = numero1 * numero2
    basic.showNumber(resultado)
})
input.onButtonPressed(Button.B, function () {
    resultado = numero1 + numero2
    basic.showNumber(resultado)
})
