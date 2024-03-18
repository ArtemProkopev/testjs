// 9
const name = 'Артём'
console.log(`Привет, ${name}!`)

// 10
function isEven(number) {
	return number % 2 === 0
}

console.log(isEven(4)) // true
console.log(isEven(7)) // false
console.log(isEven(10)) // true

// 11
const person = {
	name: 'Артём',
	age: 18,
	city: 'Великий Новгород',
}

console.log(
	`Меня зовут ${person.name}. Мне ${person.age} лет. Я живу в городе ${person.city}.`
)

// 12
const numbers = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numbers.length; i++) {
	sum += numbers[i]
}

console.log('Сумма чисел в массиве:', sum)

// 11 вариант
const films = [
	{ title: 'Фильм 1', director: 'Режиссер 1', year: 2020 },
	{ title: 'Фильм 2', director: 'Режиссер 2', year: 2019 },
	{ title: 'Фильм 3', director: 'Режиссер 3', year: 2018 },
]

for (let i = 0; i < films.length; i++) {
	console.log(`Название фильма: ${films[i].title}`)
	console.log(`Режиссер: ${films[i].director}`)
}
