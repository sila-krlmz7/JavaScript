const countries = ['Finland', 'Ireland', 'Iceland', 'Canada', 'Japan']
let longestCountry = countries[0]        // Finland
let longestLength = countries[0].length  // 7

for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > longestLength) {
        longestLength = countries[i].length
        longestCountry = countries[i]
    }
}

console.log(longestCountry)   // "Ireland" ya da "Iceland" (7 harf, ilk bulunan kazanır)
