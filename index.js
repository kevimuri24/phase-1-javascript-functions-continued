// code your solution here
function saturdayFun(kitu = "roller-skate"){
    return `This Saturday, I want to ${kitu}!`
}
saturdayFun("watch a movie")

function mondayWork(kitu = "go to the office"){
    return `This Monday, I will ${kitu}.`
}
mondayWork("finish that report")

function wrapAdjective(noma){
    let prompt = function (something) {
        return `You are ${noma}${something}${noma}!`
    }
    return prompt;
}
console.log(wrapAdjective("*")("a hard worker"))