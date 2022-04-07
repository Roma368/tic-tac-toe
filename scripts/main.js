var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var getStep = 0;
var text = 'pls, write name';
var firstName;
var secondName;
var win;
var gaps = {
    first: undefined,
    second: undefined,
};
var howManyTimesWins = {
    firstPlayer: 0,
    secondPlayer: 0,
};

var  placeholders = {
    ph0: undefined,
    ph1: undefined,
    ph2: undefined,
    ph3: undefined,
    ph4: undefined,
    ph5: undefined,
    ph6: undefined,
    ph7: undefined,
    ph8: undefined,
    ph9: undefined,
};

var arrKeys = Object.keys(placeholders);



function cross (x, y) {
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 30, y + 30);
    ctx.moveTo(x, y);
    ctx.lineTo(x - 30 , y + 30);
    ctx.moveTo(x, y);
    ctx.lineTo(x - 30, y - 30);
    ctx.moveTo(x, y);
    ctx.lineTo(x + 30, y - 30);
    ctx.stroke();
}

function circle(x, y){
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.stroke();
}

function putInPlaceHoledrValue (v, x, y){
    if(getStep == 3){
        return
    }
    if (getStep == 0){
        cross(x, y)
        getStep = 1
        placeholders[arrKeys[v]] = getStep
        whoseTurn(secondName)
    } else if(getStep == 1){
        if(placeholders[arrKeys[v]] == undefined){
            getStep = 2
            placeholders[arrKeys[v]] = getStep
            whoseTurn(firstName)
        } else{
            return
        }
        circle(x, y)
    } else if (getStep == 2){
        if(placeholders[arrKeys[v]] == undefined){
            getStep = 1
            placeholders[arrKeys[v]] = getStep
            whoseTurn(secondName)
        } else {
            return
        }
        cross(x, y)
    }
}

function isFirstName(){
    firstName = document.getElementById('fp').value
    if (firstName == ''){
        document.getElementById('attentionFp').textContent = text
        return gaps.first = 1
    } else if (firstName !== ''){
        document.getElementById('attentionFp').style.display = 'none'
        return gaps.first = 0
    }
}

function isSecondtName(){
    secondName = document.getElementById('sp').value
    if (secondName == ''){
        document.getElementById('attentionSp').textContent = text
        return gaps.second = 1
    } else if (secondName !== ''){
        document.getElementById('attentionSp').style.display = 'none'
        return gaps.second = 0
    }
}

function isWin (a, b ,c){
    if(placeholders[arrKeys[a]] == 1 && placeholders[arrKeys[b]] == 1 && placeholders[arrKeys[c]] == 1){
        getStep = 3
        win = 'win ' + firstName
        document.getElementById('whose-turn').innerHTML = ''
        howManyTimesWins.firstPlayer += 1
        document.getElementById('player1').innerHTML = firstName + ' has won: ' + howManyTimesWins.firstPlayer
        document.getElementById('congratulation').innerHTML = win
    } else if(placeholders[arrKeys[a]] == 2 && placeholders[arrKeys[b]] == 2 && placeholders[arrKeys[c]] == 2){
        getStep = 3
        win = 'win ' + secondName
        howManyTimesWins.secondPlayer += 1
        document.getElementById('player2').innerHTML = secondName + ' has won: ' + howManyTimesWins.secondPlayer
        document.getElementById('congratulation').innerHTML = win
    }
}

function isDraw (a, b, c, d, e, f, g, h, j){
    if(placeholders[arrKeys[a]] !== undefined && placeholders[arrKeys[b]] !== undefined && placeholders[arrKeys[c]] !== undefined && placeholders[arrKeys[d]] !== undefined && placeholders[arrKeys[e]] !== undefined && placeholders[arrKeys[f]] !== undefined && placeholders[arrKeys[g]] !== undefined && placeholders[arrKeys[h]] !== undefined && placeholders[arrKeys[j]] !== undefined){
        win = 'draw'
        document.getElementById('congratulation').innerHTML = win
    }
}

function whoseTurn (a){
    document.getElementById('whose-turn').innerHTML = 'now move ' + a
}

$('div.ph1').click(function () {
    putInPlaceHoledrValue(1, 55.5, 55.5)
    isDraw(1,2,3,4,5,6,7,8,9)
    isWin(1,2,3)
    isWin(1,5,9)
    isWin(1,4,7)
})

$('div.ph2').click(function () {
    putInPlaceHoledrValue(2, 166.5, 55.5)
    isDraw(1,2,3,4,5,6,7,8,9)
    isWin(1,2,3)
    isWin(2,5,8)
})

$('div.ph3').click(function () {
    putInPlaceHoledrValue(3, 277.5, 55)
    isDraw(1,2,3,4,5,6,7,8,9)
    isWin(1,2,3)
    isWin(3,5,7)
    isWin(3,6,9)
})

$('div.ph4').click(function () {
    putInPlaceHoledrValue(4, 55.5, 166.5)
    isDraw(1,2,3,4,5,6,7,8,9)
    isWin(4,5,6)
    isWin(1,4,7)
})

$('div.ph5').click(function () {
    putInPlaceHoledrValue(5, 166.5, 166.5)
    isDraw(1,2,3,4,5,6,7,8,9)
    isWin(4,5,6)
    isWin(2,5,8)
    isWin(3,5,7)
})

$('div.ph6').click(function () {
    putInPlaceHoledrValue(6, 277.5, 166.5)
    isDraw(1,2,3,4,5,6,7,8,9)
    isWin(4,5,6)
    isWin(3,6,9)

})

$('div.ph7').click(function () {
    putInPlaceHoledrValue(7, 55.5, 277.5)
    isDraw(1,2,3,4,5,6,7,8,9)
    isWin(7,8,9)
    isWin(1,4,7)
    isWin(3,5,7)
})

$('div.ph8').click(function () {
    putInPlaceHoledrValue(8, 166.5, 277.5)
    isDraw(1,2,3,4,5,6,7,8,9)
    isWin(7,8,9)
    isWin(2,5,8)
})

$('div.ph9').click(function () {
    putInPlaceHoledrValue(9, 277.5, 277.5)
    isDraw(1,2,3,4,5,6,7,8,9)
    isWin(7,8,8)
    isWin(3,6,9)
    isWin(1,5,9)
})

$('.button-play').click(function (){
    getStep = 0;
    isFirstName()
    isSecondtName()
    whoseTurn(firstName)
    if(gaps.first == 1 || gaps.second == 1){
        return
    } else if (gaps.first == 0 || gaps.second == 0){
        document.getElementById("platform").style.display = "block";
        document.getElementById("platform").style.opacity = "1";
    }
    document.getElementById('fp').style.display = 'none'
    document.getElementById('sp').style.display = 'none'
    document.getElementById('button-to-play').style.display = 'none'
    document.getElementById('player1').style.display = 'block'
    document.getElementById('player1').innerHTML = firstName + ' has won: ' + howManyTimesWins.firstPlayer
    document.getElementById('player2').style.display = 'block'
    document.getElementById('player2').innerHTML = secondName + ' has won: ' + howManyTimesWins.secondPlayer
})

$('.button-reset').click(function (){
    whoseTurn(firstName)
    document.getElementById('congratulation').innerHTML = ''
    for(let i = 0; i < arrKeys.length; i++){
        placeholders[arrKeys[i]] = undefined
    }
    getStep = 0
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})