import React from 'react'

function isVowel(value) {
    return ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"].includes(value[0])
}

function getArticle(profession) {
    if (isVowel(profession)) {
        return 'an'
    } else {
        return 'a'
    }
}



export default function Panel({ label, profession }) {

    let article = getArticle(profession)

    return (
        <div>
            <h1>
                Hi this is {label}
            </h1>
            <p>
                I am {article} {profession}!!!
            </p>
        </div>
    )
}
