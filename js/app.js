let TextArray = [
    'Lorem', 'ipsum', 'dolor', 'amet', 'consectetur', 'adipisicing', 'elit',
    'Nisi', 'atque', 'sunt', 'dignissimos', 'possimus', 'iure', 'repellat',
    'aliquam', 'vel', 'eius', 'saepe', 'aperiam', 'numquam', 'distinctio',
    'adipisci', 'at', 'veritatis', , 'neque', 'corrupti', 'numquam', 'odit',
    'dolore', 'tempora', 'debitis.', 'Odio', 'eaque', 'unde', 'quia', 'atque',
    'quaerat', 'corporis', 'at', 'cumque', 'sapiente', 'doloribus', 'illo',
    'velit', 'dolor', 'quos', 'sit', 'quod', 'sint', 'libero!', 'Alias', 'a',
    'incidunt', 'dolorem', 'eos', 'doloremque', 'vero', 'voluptate', 'modi',
    'exercitationem', 'porro', 'voluptatibus', 'corrupti', 'consequuntur',
    'ad', 'voluptatem', 'Excepturi', 'nostrum', 'dolor', 'similique', 'odit',
    'ducimus', 'praesentium', 'esse', 'quasi', 'dolore', 'quas', 'illum', ,
    'assumenda', 'cupiditate', 'corrupti', 'saepe', 'quos', 'doloribus',
    'exercitationem', 'enim', 'animi', 'natus', 'odio', 'optio', 'porro',
    'molestias', 'Minima', 'dignissimos', 'necessitatibus', 'alias',
    'quas', 'expedita', 'exercitationem', 'natus', 'placeat', 'nisi',
    'consectetur', 'ab', 'enim', 'ad', 'rem', 'officia', 'at', 'quasi'
]

let $ = document

const result = $.querySelector('.result')
const numberInput = $.getElementById('number')
const generateBtn = $.querySelector('button')
const modalEror = $.querySelector('.modal')


generateBtn.addEventListener('click', function () {

    let inputValue = numberInput.value
    let randomIndex;
    let generatorElem = ''

    if (inputValue === '' || inputValue < 0 || isNaN(inputValue)) {

        modalEror.classList.add('show-modal')

        setTimeout(function () {

            modalEror.classList.remove('show-modal')
        }, 3000)

    } else {

        for (let i = 0; i < inputValue; i++) {

            randomIndex = Math.floor(Math.random() * TextArray.length)

            generatorElem += ' ' + TextArray[randomIndex] + ' '
            result.innerHTML = generatorElem
        }
    }
})