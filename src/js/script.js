var currentscrumbledword = "";
var currentans = "";
var currentindex = 0;
var wordDictionay = [];
var score = 0;
var timer = "";
var myTimer;
var clickedcharacter = [];
var backenable = true;
var spacecontaning = false;
wordDictionay = [
    { question: " What should you avoid with someone who is sick?", key: shuffle("CLOSE CONTACT"), value: "CLOSECONTACT", Hint: "CLOSE CONTACT" },
    { question: "What should you wash your hands with for atleast 20 seconds, when visibly dirty?", key: shuffle("SOAP"), value: "SOAP", Hint: "SOAP" },
    { question: "What should you do, upon return from a COVID-19 affected area?", key: shuffle("SELF QUARANTINE"), value: "SELFQUARANTINE", Hint: "SELF QUARANTINE" },
    { question: "This is one of the symptoms of COVID-19", key: shuffle("SORE THROAT"), value: "SORETHROAT", Hint: "SORE THROAT" },
    { question: "What cannot prevent Coronavirus?", key: shuffle("ANTIBIOTICS"), value: "ANTIBIOTICS", value: "ANTIBIOTICS", Hint: "ANTIBIOTICS" },
    { question: "What is the minimum distance one must maintain from someone with COVID-19 symptoms?", key: shuffle("THREE FEET"), value: "THREEFEET", Hint: "THREE FEET" },
    { question: "What nature of cough is a symptom of COVID-19?", key: shuffle("DRY"), value: "DRY", Hint: "DRY" },
    { question: "For how many days should one quarantine themselves, in case of symptoms or on return from COVID-19 affected area?", key: shuffle("FOURTEEN"), value: "FOURTEEN", Hint: "FOURTEEN" },
    { question: "What should you not do to a mask when using it?", key: shuffle("TOUCH"), value: "TOUCH", Hint: "TOUCH" },
    { question: "What is a great practice to break the chain of COVID-19?", key: shuffle("SOCIAL DISTANCING"), value: "SOCIALDISTANCING", Hint: "SOCIAL DISTANCING" }
]

function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}

function shuffle(s) {
    var arr = s.split(' '); // Convert String to array
    let finalarr;
    if (arr.length > 1) {
        var arr1 = arr[0].split('');
        var arr2 = arr[1].split('');
        let shuffled1 = arr1
            .map((a) => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)
        let shuffled2 = arr2
            .map((a) => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)
        shuffled1.push(" ");
        finalarr = shuffled1.concat(shuffled2);
    } else {
        var arr1 = s.split('');
        finalarr = arr1
            .map((a) => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)
    }



    /*  var n = arr.length; // Length of the array

    for (var i = 0; i < n - 1; ++i) {
        var j = getRandomInt(n); // Get random of [0, n-1]

        var temp = arr[i]; // Swap arr[i] and arr[j]
        arr[i] = arr[j];
        arr[j] = temp;
    }
*/
    s = finalarr.join(''); // Convert Array to string
    return s; // Return shuffled string
}

function onload() {

    LoadGui();
}

function LoadGui() {
    if (currentindex < wordDictionay.length) {
        clearBox();
        clearInterval(myTimer);
        disableBtn();
        spacecontaning = false;
        document.getElementById("answer").innerHTML = "";
        document.getElementById("answer").setAttribute("visibilty", "hidden")
        currentscrumbledword = wordDictionay[currentindex].key;
        currentans = wordDictionay[currentindex].value;
        var count = Object(currentscrumbledword).length;
        document.getElementById("question").innerHTML = wordDictionay[currentindex].question;
        DrawWords(currentscrumbledword, count);
        var textbox = document.getElementById("puzzlesolution");
        textbox.value = "_".repeat(count);
        if (count > 12) {
            textbox.setAttribute('rows', 1);
            textbox.setAttribute('cols', count / 1.5);
        } else {
            textbox.setAttribute('rows', 1);
            textbox.setAttribute('cols', count);
        }

        display = document.querySelector('#timer');
        setTimer();
        currentindex++;
        document.getElementById("questionumber").innerHTML = currentindex + "/10";

    } else {
        localStorage.setItem("storageName", score);
        location.replace("share.html")
    }
}

function setTimer() {
    myTimer = setInterval(myClock, 1000);
    var c = 30;

    function myClock() {
        document.getElementById("timer").innerHTML = "00:" + ("0" + --c).slice(-2);
        if (c == 0) {
            clearInterval(myTimer);
            enableBtn();
            showrightanswer();
        }
    }
}

function disableBtn() {
    let image = document.getElementById('next-btn');
    image.src = 'img/nextopec.png';
    document.getElementById("next-btn").disabled = true;
    document.getElementById("puzzlesolution").style.backgroundColor = "rgb(0,82,156)";
    disablebackBtn();
}

function enableBtn() {
    let image = document.getElementById('next-btn');
    image.src = 'img/next.png';
    document.getElementById("next-btn").disabled = false;
    disablebackBtn();
}


function disablebackBtn() {
    if (backenable) {
        backenable = false;
        let image = document.getElementById('back-btn');
        image.src = 'img/backopec.png';
        document.getElementById("back-btn").disabled = true;
    }
}

function enablebackBtn() {

    if (!backenable) {
        backenable = true;
        let image = document.getElementById('back-btn');
        image.src = 'img/back.png';
        document.getElementById("back-btn").disabled = false;
    }
}


function randomKeyFromDict(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function DrawWords(word, wordlength) {
    var input = 0;
    word.split('').forEach(function(c) {
        drawLabel(c, wordlength, input);
        input++;
    });
}

function clearBox() {
    document.getElementById("puzzleword1").innerHTML = "";
    document.getElementById("puzzlesolution").value = "";
}

function drawLabel(cha, count, input) {
    var size = count - 3;
    var font = size - 2;
    // document.getElementById("puzzleword").innerHTML = " ";
    if (cha == " ") {
        spacecontaning = true;
        alert("helo");
    }

    if (spacecontaning) {
        if (cha != " ")
            $("#puzzleword2").append("<br><input type='button' class='puzzle-char' id='" + cha + input + "' onmousedown= 'charOnClick(this.value,this.id);' value ='" + cha + "'></input>");
    } else
        $("#puzzleword1").append("<br><input type='button' class='puzzle-char' id='" + cha + input + "' onmousedown= 'charOnClick(this.value,this.id);' value ='" + cha + "'></input>");


}

function charOnClick(chrs, id) {
    // var text = document.getElementById("puzzlesolution").value;
    document.getElementById("puzzlesolution").value = replaceChar(chrs);
    //  alert(document.getElementById("puzzlesolution").value.length);
    //  document.getElementById(id).setAttribute("type", "hidden");
    document.getElementById(id).style.opacity = '0';
    enablebackBtn();
    clickedcharacter.push({
        id
    });
    Logic();
}

function clickOnBackBTN() {
    document.getElementById(clickedcharacter[clickedcharacter.length - 1].id).setAttribute("type", "visible");
    clickedcharacter.pop(clickedcharacter.length - 1);
    var origString = document.getElementById("puzzlesolution").value;
    var index = origString.indexOf("_");
    let firstPart = origString.substr(0, index - 1);
    let lastPart = origString.substr(index);
    document.getElementById("puzzlesolution").value = firstPart + "_" + lastPart;
    if (index == 1)
        disablebackBtn();
}

function replaceChar(replaceChar) {
    var origString = document.getElementById("puzzlesolution").value;
    var index = origString.indexOf("_");
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1);
    let newString =
        firstPart + replaceChar + lastPart;
    return newString;
}

function Logic() {

    var input = document.getElementById("puzzlesolution").value;

    if (input.includes("_")) {
        return;
    }
    if (input.length == currentans.length) {
        if (wordDictionay[currentindex - 1].value == input) {
            // Showmessage("Voila!!! Correct Answer Loading New Quiz.")
            score += 1;
            changecolorAccordingtoResult(1);
        } else {
            showrightanswer();
        }
    }
}

function showrightanswer() {
    changecolorAccordingtoResult(0);
    document.getElementById("answer").innerHTML = wordDictionay[currentindex - 1].Hint;
    //  Showmessage("Oops! Wrong Answer Please Try Again")  
}

/*function Showmessage(msg) {
    var x = document.getElementById("snackbar");
    x.innerHTML = msg;
    x.className = "show";
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}
*/
function showAlert(status, msg, type, thumb) {
    document.getElementById("myAlert").innerHTML = "";
    $("#myAlert").append("<div class='jumbotron jumbotron-fluid bg-" + type + "'>  <div class='container'><h1><i class='fas fa-thumbs-" + thumb + "'></i> " + status + "</h1><p style='padding-left:9%;'>" + msg + "</p></div></div>");
    $("#myAlert").css('visibilty', 'visible');
}

function changecolorAccordingtoResult(colorcode) {
    clearInterval(myTimer);
    enableBtn();
    if (colorcode == 1)
        document.getElementById("puzzlesolution").style.backgroundColor = "rgb(57,181,74)";
    else {
        document.getElementById("puzzlesolution").style.backgroundColor = "rgb(239,28,37)";
        //    document.getElementById("answer").innerHTML = currentans;
        document.getElementById("answer").setAttribute("visibilty", "visible")
    }
}
if (window.performance) {
    console.info("window.performance works fine on this browser");
}
// if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
//     location.replace("index.html")
// } else {
//     console.info("This page is not reloaded");
// }