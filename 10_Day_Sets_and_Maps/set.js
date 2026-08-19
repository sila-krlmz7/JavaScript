const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)
// Set(4) {"English", "Finnish", "French", "Spanish"}
for (const language of setOfLanguages) {
    console.log(language)
}
const companies = new Set()
console.log(companies.size)

companies.add('Google')
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 elements in the set
console.log(companies)
console.log(companies.delete('Google'))
console.log(companies.size)
console.log(companies)
console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true
companies.clear()
console.log(companies)