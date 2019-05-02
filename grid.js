
function getPeople() {
    return [
        {
            "id": 1,
            "fname": "Jan",
            "sname": "Kowalski",
            "birthdate": "2013-07-08",
            "sex": "M"
        },
        {
            "id": 2,
            "fname": "Jan",
            "sname": "Disney",
            "birthdate": "2008-04-30",
            "sex": "M"
        },
        {
            "id": 3,
            "fname": "Patryk",
            "sname": "Kowalski",
            "birthdate": "1977-03-11",
            "sex": "M"
        },
        {
            "id": 4,
            "fname": "Czesław",
            "sname": "Majtak",
            "birthdate": "1982-09-12",
            "sex": "M"
        },
        {
            "id": 5,
            "fname": "Hermenegilda",
            "sname": "Myszak",
            "birthdate": "1990-11-15",
            "sex": "W"
        },
        {
            "id": 6,
            "fname": "Olga",
            "sname": "Snow",
            "birthdate": "1992-07-02",
            "sex": "W"
        },
        {
            "id": 7,
            "fname": "Andrzej",
            "sname": "Kostecki",
            "birthdate": "2010-07-08",
            "sex": "M"
        },
        {
            "id": 7,
            "fname": "Michał",
            "sname": "Kostecki",
            "birthdate": "2010-07-08"
        },
        {
            "id": 7,
            "fname": "Grażyna",
            "sname": "Kostecka",
            "birthdate": "2010-07-08"
        }
    ]
}

function getSex(person) {
    if (person.sex===undefined) {
        return getSexByName(person)
    }
    return getSexByProperty(person)
}

function getSexByProperty(person) {
    console.log('byProperty', person)
    return (person.sex ==='M') ? 'images/mars.svg' : 'images/venus.png'
}

function getSexByName(person) {
    console.log('byName', person)
    return (person.fname.slice(-1)!== 'a') ? 'images/mars.svg' : 'images/venus.png'
}

function gridRow(person) {
    
    const { id, fname, sname, birthdate } = person
    const age = calculateDate(birthdate)

    const sexImageUrl = getSex(person)
    return `

    <td class="id">${id}</td>
    <td class="fname">${fname}</td>
    <td class="sname">${sname}</td>
    <td class="birthdate">${birthdate}</td>
    <td class="age">${age}</td>
    <td class="sex"><img src="${sexImageUrl}"></td>
    `
}

function calculateDate(birthdate) {
    let today = new Date()
    birthdate = new Date(birthdate)
    
    let todayYear = today.getFullYear()
    let birthdateYear = birthdate.getFullYear()

    let yearDifference = todayYear - birthdateYear

    let diffToday = today.getTime() - (new Date(`${todayYear}`)).getTime()
    let diffBirthdate = birthdate.getTime() - (new Date(`${birthdateYear}`)).getTime()
    let minusOneYear = (diffToday - diffBirthdate) < 0 ? 1 : 0
    yearDifference -= minusOneYear

    return yearDifference
}

function grid() {
    let people = getPeople();
    let table = document.querySelector('.people__body')
    for(let i=0;i<people.length;i++) {
        let tr = document.createElement('tr')
        tr.innerHTML = gridRow(people[i])
        tr.id = `person-${people[i].id}`
        table.appendChild(tr)
    }
}

window.onload = grid;