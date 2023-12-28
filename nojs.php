<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JTroller.com Game</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <link rel="stylesheet" href="/jtrollerm.css">
	<meta name="description" content="Play JTroller.com's log rolling game and help Justin Trudeau stay balanced on a log in the water. Master the art of adjusting the log to keep Trudeau afloat while navigating through increasingly challenging levels. Try to beat your high score in this whimsical, apolitical adventure, or watch him tip over – the choice is yours!">
	    <meta name="keywords" content="JTroller.com, log rolling game, Justin Trudeau, water game, high score, apolitical adventure">
	    <meta name="author" content="Sherif">
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
<link rel="manifest" href="/favicon/site.webmanifest">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a style="color:#eef;" class="text-decoration-none title" href="/"><i class="fab fa-canadian-maple-leaf"></i> JTroller.com Game</a>
    </nav>
    <div class="container mt-5">
        <h2 class="mt-3">JTroller.com Game Needs Javascript to run</h2>
        <p>Please enable Javascript in your browser and try again!<br><br>There are no trackers on this domain. You are anonymous.</p>
        <div class="image-container">
            <img id="placeholderImage" src="canvas.png" alt="Game Placeholder">
        </div>
    </div>
    <br>
<div class="container mt-4">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-body text-left">
                    <h4 class="card-title">About JTroller.com</h4>
                    <p class="card-text">Play JTroller.com's log rolling game and help Justin Trudeau stay balanced on a log in the water. Master the art of adjusting the log to keep Trudeau afloat while navigating through increasingly challenging levels. Try to beat your high score in this whimsical, apolitical adventure, or watch him tip over – the choice is yours!</p>
                    <p class="card-text contact-info">
                        <small>This game was independently developed by a single creator with no malicious intent and no affiliation or influence from any external parties, directly or indirectly.<br><br>You may contact the developer at yellow.wing9848 'at' fastmail.com.</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<br>
<?php

$currentPageUrl = "https://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

$encodedUrl = urlencode($currentPageUrl);
?>
<br>
<div class="container">
    <div class="row mb-2">
        <div class="col">
            <h5>Share this Game:</h5>
        </div>
    </div>
    <div class="row">
        <div class="col mb-2">
            <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $encodedUrl; ?>" class="btn btn-primary social-btn" target="_blank"><i class="fab fa-facebook-f"></i> Facebook</a>
        </div>
        <div class="col mb-2">
            <a href="https://twitter.com/intent/tweet?url=<?php echo $encodedUrl; ?>&text=Check this out" class="btn btn-info social-btn" target="_blank"><i class="fab fa-twitter"></i> X</a>
        </div>
        <div class="col mb-2">
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo $encodedUrl; ?>" class="btn btn-secondary social-btn" target="_blank"><i class="fab fa-linkedin-in"></i> LinkedIn</a>
        </div>
        <div class="col mb-2">
            <a href="https://pinterest.com/pin/create/button/?url=<?php echo $encodedUrl; ?>&media=[MEDIA]&description=[DESCRIPTION]" class="btn btn-danger social-btn" target="_blank"><i class="fab fa-pinterest-p"></i> Pinterest</a>
        </div>
        <div class="col mb-2">
            <a href="mailto:?subject=Interesting Page&body=Check this out: <?php echo $currentPageUrl; ?>" class="btn btn-success social-btn"><i class="fas fa-envelope"></i> Email</a>
        </div>
        <div class="col mb-2">
            <a href="https://wa.me/?text=<?php echo $encodedUrl; ?>" class="btn btn-warning social-btn" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a>
        </div>
    </div>
</div>
<br>
	  <div class="tech-stack">
	      <span class="tech-title"><i class="fab fa-github"></i>&nbsp;&nbsp;Development Transparency:</span>
      <span class="tech">Javascript (57.3%)</span>
      <span class="tech">HTML (28.7%)</span>
	      <span class="tech">CSS (14.0%)</span><br>Not affiliated with <a href="https://liar.com" target="_blank" class="text-decoration-none">Liar.com</a>
	  </div>
    <footer class="container">
	 <small>Not affiliated with <a href="http://liar.com" target="_blank" class="text-decoration-none">Liar.com</a></small><br><br>
        <p>&copy; 2023 Sherif</p>
    </footer>
<script>
    function checkForDesktop() {
        const minWidthForDesktop = 768;
        if (window.innerWidth > minWidthForDesktop && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.location.href = '/'; // Redirect to the desktop version
        }
    }
    checkForDesktop();
    window.addEventListener('resize', checkForDesktop);
</script>
<script>
    window.location.href = '/';
</script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>
</html>
