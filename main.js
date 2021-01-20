const separateWords = (text, time = 1000, qty) => {
    const arrayWords = text.split(' ');
    let index = 0;
    let idInterval = setInterval( (words) => {

        if (index < words.length) {
            console.log(words[index])
            index++;
        } else {
            clearInterval(idInterval)
            qty(arrayWords.length)
        }

    }, time, arrayWords)
}

separateWords('Lorem Ipsum is simply', 500, (count) => {
    let totalCount = count;
    separateWords(' dummy text of the ', 500, (count) => {
        totalCount += count;
        separateWords('printing and typesetting industry.', 500, (count) => {
            totalCount += count;
            console.log(totalCount)
        });
    });
});