<!doctype html>
<html lang="en" class="h-full bg-gray-200">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title></title>

    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    <script src="{{ mix('/js/app.js') }}" defer></script>
    @routes
</head>
<body class="font-sans text-gray-700 antialiased">
    @inertia
</body>
</html>

