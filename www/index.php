<!DOCTYPE html>
<html lang="de">

<head>
    <title>Cyanic</title>
    <?php include 'php/partials/head.php' ?>
</head>

<body class="mainpage">
    <?php include 'php/partials/navigation.php' ?>
    <?php include 'php/partials/loadingscreen.php' ?>
    <main>
        <div class="firstview mb-5">
            <div class="firstview-image" id="particles-js">
                <div class="firstview-image-layer"></div>
                <span class="firstview-text">Lorem Ipsum Dolor, Sit Amet</span>
            </div>
        </div>

        <div class="wrapper">
            <h1 class="font-weight-light text-center mb-5">Mehr <b>Informationen</b></h1>
            <div class="content_body container-fluid">
                <div class="subpages">
                    <a class="subpage mb-5 mb-lg-0" href="services.php">
                        <div class="subpage__icon">
                            <i class="fas fa-map-marker fa-4x"></i>
                        </div>
                        <span class="subpage__name">Leistungen</span>
                        <span class="subpage__teaser"></span>
                    </a>
                    <a class="subpage mb-5 mb-lg-0" href="team.php">
                        <div class="subpage__icon">
                            <i class="fas fa-users fa-4x"></i>
                        </div>
                        <span class="subpage__name">Team</span>
                        <span class="subpage__teaser"></span>
                    </a>
                    <a class="subpage mb-5 mb-lg-0" href="references.php">
                        <div class="subpage__icon">
                            <i class="fas fa-star fa-4x"></i>
                        </div>
                        <span class="subpage__name">Referenzen</span>
                        <span class="subpage__teaser"></span>
                    </a>
                    <a class="subpage mb-5 mb-lg-0" href="contact.php">
                        <div class="subpage__icon">
                            <i class="fas fa-envelope-open fa-4x"></i>
                        </div>
                        <span class="subpage__name">Kontakt</span>
                        <span class="subpage__teaser"></span>
                    </a>
                </div>
            </div>
        </div>
        <img src="img/site_end.jpg" class="img-fluid" alt="End of site, forest Image">
    </main>
</body>

</html>