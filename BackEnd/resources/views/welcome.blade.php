<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets\css\master.css">
    <title>i-sakafo</title>
</head>
<body>
    <!--a href="{{ route('ajouter/vehicule') }}">ajouter vehicule</!--a>
    @foreach( $vehicules as $item  )
        <p>Nom de vehicule : {{ $item->nom_v }}</p>
        <a href="{{route('modifier/vehicule', ['id' => $item->id])}}">Modifier</a>
        <a href="{{route('delete/vehicule', ['id' => $item->id])}}">supprimer</a>
        <a href="{{route('voir/vehicule', ['id' => $item->id])}}">voir</a>
        <hr>
    @endforeach !-->
</body>
</html>
