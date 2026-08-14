let newArr = []
const countries = ['Finland', 'Ireland', 'Iceland', 'Canada', 'Japan']
for (const country of countries) {
    if (country.includes('land')) {
        newArr.push(country)
    }
}
console.log(newArr)