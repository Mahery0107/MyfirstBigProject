<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modifier</title>
</head>
<body>
<form method='POST' action="{{route('editer.vehicule', ['id' => $vehicule->id])}}" >
        @csrf
            Nom du Véhicule :  <input type='text' id='input_add_nom' name="nom" value="{{ $vehicule->nom_v }}"/><br />
            Type :  <input type='text' id='input_add_prenom' name="type" value="{{ $vehicule->type }}"/><br />
            Marque :  <input type='text' id='input_add_marque' name="marque" value="{{ $vehicule->marque }}"/><br />
            Date d'enregistrement :  <input type='date' id='input_add_date' name="dte" value="{{ $vehicule->dde }}"/></div>
            <button type="submit" id='soratra'>Modifier du véhicule</button> </div>
</form>
<a href="{{route('/')}}">retour</a>
</body>
</html>
