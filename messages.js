// Goal of the project: create a random message generator

const randomString1 = ['horse', 'monkey', 'dog', 'whale', 'fox']
const randomString2 = ['gun', 'teaspoon', 'Macbook Pro', 'kitchen sink', 'guitar']
const randomString3 = ['bar', 'ditch', 'super market', 'bathub', 'farm']
const randomString4 = ['canned beans', 'a bar of Snickers', 'chicken wings with fries', 'frozen gazpacho', 'deer stew']
const randomString5 = ['the Bohemian Rhapsody', 'the Hungarian anthem', 'russian folk music', 'The Beatles', 'Rammstein']



// const strings = [randomString1, randomString2, randomString3, randomString4, randomString5]
// const randoms = [random1, random2, random3, random4, random5]

function randomMessage() {
    const random1 = Math.floor(Math.random() * 5)
    const random2 = Math.floor(Math.random() * 5)
    const random3 = Math.floor(Math.random() * 5)
    const random4 = Math.floor(Math.random() * 5)
    const random5 = Math.floor(Math.random() * 5)
    console.log('A ' + randomString1[random1] + ' in a ' + randomString3[random3] + ' with a ' + randomString2[random2] + ' in his hand.');
    console.log('Eating ' + randomString4[random4] + ' and humming ' + randomString5[random5] + '.');
    console.log('');
}

for (let i = 0; i < 5; i++) {
    randomMessage();
}