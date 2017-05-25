<?
include "php/meta_helpers.php";

$path = "$_SERVER[REQUEST_URI]";
$stub = trim($path, "/");
?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<? echo getDescription($stub) ?>">
    <meta name="keywords" content="HTML, CSS, JavaScript, JS, React, UI Design, UX Design, UI/UX Design, Front-End Engineer, Branding, Brand, Engineer, Engineering, San Francisco, Bay Area, Development, Design, Developer, Designer">

    <title><? echo getTitle($stub) ?></title>

    <link rel='shortcut icon' type='image/x-icon' href='favicon.ico' />
    <link href="https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i&amp;subset=latin-ext" rel="stylesheet">
    <link href="./styles/styles.css" rel="stylesheet">
  </head>

  <body>
    <div id="page-contents"></div>

    <!-- Analytics, obviously -->
    <?php include_once("php/analytics.php") ?>

    <!-- Dependencies -->
    <!--<script src="./node_modules/react/dist/react.js"></script>
    <script src="./node_modules/react-dom/dist/react-dom.js"></script>-->

    <!-- Bundled JS -->
    <script src="./js/compiled/bundle.js"></script>
  </body>
</html>
