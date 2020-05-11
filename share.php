<!DOCTYPE html>
<html lang="en">
<title>Jio Offer</title>
<link rel="icon" href="img/jio.png" type="image/icon type">
<head>
    <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <title>Word Puzzle</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width user-scalable=no" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://cdn.rawgit.com/robbmj/simple-js-countdown-timer/master/countdowntimer.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <link href="src/css/style.css" rel="stylesheet">
</head>

<body>
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6" id="main-share">
            <div id="parent" style="height: auto;">
                <div class="child" style="height: 150px;">
                    <img id="logo-share" src="img/jio.png" alt="logo">
                </div>
                <div class="child">
                    <p id="score">Thanks for Participating</p>
                </div>
                <!-- <div class="child">
                    <div class="container">
                        <img id="score-box" src="img/score.png" alt="score-box">
                        <div id="scoreboard" class="centered">1&nbsp;&nbsp;2</div>
                    </div>
                </div> -->
                <div class="child">
                    <p id="risk-status">You are at <b>Second Stage</b> Need to complete It to get Free Recharge Now.</p>
                </div>
                <!-- <div class="child">
                    <p id="share-message"><b>Thank you for Participating</b></p>
                </div> -->
                <div class="child" style="margin-bottom: 40vw;">
                    <input id="btn-start" type="image" class="share-button" src="img/shareold.png" value="share" alt="Submit">
                </div>

                <!-- <div class="child" style="margin-bottom: 60vw;">
                    <input id="btn-restart" type="image" class="restart-button" src="img/tryagain.png" value="tryagain" alt="Submit" onclick="RestartApp();">
                </div> -->
            </div>
        </div>
    </div>
    <div class="col-sm-3"></div>
    </div>
    <div id=" snackbar "></div>
</body>
<script src="src/js/scriptend.js"></script>

</html>