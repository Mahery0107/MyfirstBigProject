<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<p>Nom de vehicule : {{ $vehicule->nom_v }}</p>
        <p>Type du vehicule : {{ $vehicule->type }}</p>
        <p>Marque : {{ $vehicule->marque }}</p>
        <p>date : {{ $vehicule->dde }}</p>
        <a href="{{route('/')}}">retour</a>
</body>
</html>
