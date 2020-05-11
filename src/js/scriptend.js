var score;
const shareButton = document.querySelector('.share-button');

// window.onload {
//     score = localStorage.getItem("storageName");
//     if (score < 6) {
//         document.getElementById("risk-status").innerHTML = "You need to learn a lot more and take precautions to combat COVID-19.";
//         //  alert("You need to learn a lot more and take precautions to combat COVID-19.")
//     } else if (score > 5 && score < 7) {
//         // alert("A little more awareness will help you take the right precautions.");
//         document.getElementById("risk-status").innerHTML = "A little more awareness will help you take the right precautions.";
//     } else {
//         //  alert("You have the right know-how to combat COVID-19.");
//         document.getElementById("risk-status").innerHTML = "You have the right know-how to combat COVID-19.";

//     }
//     if (score < 10)
//         document.getElementById("scoreboard").innerHTML = 0 + "&nbsp;&nbsp;" + score;
//     else
//         document.getElementById("scoreboard").innerHTML = 1 + "&nbsp;&nbsp;" + 0;
// }
shareButton.addEventListener('click', event => {
    score = localStorage.getItem("storageName");
    if (navigator.share) {
        navigator.share({
                title: 'JIO COVID-19 OFFER',
                url: 'https://jio-covid-19-offer.com/',
                text: "Reliance Jio is offering a free recharge of Rs. 555 to users in these difficult times when the entire country is under lockdown. Get this offer just click on below link  \n"

            }).then(() => {
                console.log('Thanks for sharing!');
                location.replace("index.php")
            })
            .catch(console.error);
    } else {
        alert("your browser does not support sharing");
    }
});

function RestartApp() {
    location.replace("index.php")
}
/*
function Share()
{
	
if (navigator.share) {
    navigator.share({
      title: 'WebShare API Demo',
      url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    alert("your browser does not support sharing");
  }
}*/
if (window.performance) {
    console.info("window.performance works fine on this browser");
}
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    location.replace("index.php")
} else {
    console.info("This page is not reloaded");
}