<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajout</title>
</head>
<body>
<div >
    <form method='POST' action="{{route('enrgistrer.vehicule')}}" >
        @csrf
            Nom du Véhicule :  <input type='text' id='input_add_nom' name="nom"/><br />
            Type :  <input type='text' id='input_add_prenom' name="type"/><br />
            Marque :  <input type='text' id='input_add_marque' name="marque"/><br />
            Date d'enregistrement :  <input type='date' id='input_add_date' name="dte"/></div>
            <button type="submit" id='soratra'>Informations du véhicule</button> </div>
    </form>
<a href="{{route('/')}}">retour</a>
</div>
</body>
</html>
