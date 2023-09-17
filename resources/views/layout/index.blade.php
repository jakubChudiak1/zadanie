<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href={{asset("plugins/bootstrap/bootstrap-grid.min.css")}}>
    <link rel="stylesheet" href={{asset("plugins/fontawesome/css/all.min.css")}}>
    <link rel="stylesheet" href={{asset("assets/css/style.css")}}>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <title>Zadanie</title>
</head>
<body>
    <div class="app container">
        <main>
            @include("components.header")
            @yield("content")
        </main>
        <aside>
            @include("components.map")
        </aside>
    </div>
    @include("components.footer")
    <script src={{asset("assets/js/script.js")}}></script>
    <script src={{asset("assets/js/map.js")}}></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlnRaizgDtmJEet72jg2Z9qZQP9AvM_PA&callback=initMap"></script>
</body>
</html>