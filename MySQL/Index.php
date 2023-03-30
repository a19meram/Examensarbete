<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fordons relaterade skulder dataset</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
    body {
        background-color: #262626;
        color: #fff;
        font-family: Arial, sans-serif;
    }

    form {
        margin: 20px auto;
        max-width: 500px;
        padding: 20px;
        background-color: #444;
        border-radius: 10px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    }

    label {

        margin-bottom: 10px;
        font-weight: bold;
    }

    select {

        width: 80%;
        height: 40px;
        padding: 5px;
        margin-bottom: 20px;
        font-size: 16px;
        background-color: #333;
        color: #fff;
        border: none;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }

    button {
        display: block;
        margin: 0 auto;
        padding: 10px 20px;
        font-size: 16px;
        background-color: #ff8000;
        color: #fff;
        border: none;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }

    #myDiv {
        margin: 20px auto;
        width: 50%;
        padding: 20px;
        background-color: #333;
        border-radius: 10px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
        display: none;
    }

    h2 {
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        color: #ff8000;
    }
    </style>
</head>

<body>
    <form>
        <label for="county">Län:</label>
        <select id="county" name="county">
            <option disabled selected>Välj län</option>
            <option value="alla" name="alla">Alla</option>
            <option value="Blekinge" name="county">Blekinge</option>
            <option value="Dalarna" name="county">Dalarna</option>
            <option value="Gotland" name="county">Gotland</option>
            <option value="Gävleborg" name="county">Gävleborg</option>
            <option value="Halland" name="county">Halland</option>
            <option value="Jämtland" name="county">Jämtland</option>
            <option value="Jönköping" name="county">Jönköping</option>
            <option value="Kalmar" name="county">Kalmar</option>
            <option value="Kronoberg" name="county">Kronoberg</option>
            <option value="Norrbotten" name="county">Norrbotten</option>
            <option value="Skåne" name="county">Skåne</option>
            <option value="Stockholm" name="county">Stockholm</option>
            <option value="Södermanland" name="county">Södermanland</option>
            <option value="Uppsala" name="county">Uppsala</option>
            <option value="Värmland" name="county">Värmland</option>
            <option value="Västerbotten" name="county">Västerbotten</option>
            <option value="Västernorrland" name="county">Västernorrland</option>
            <option value="Västmanland" name="county">Västmanland</option>
            <option value="Västra Götaland" name="county">Västra Götaland</option>
            <option value="Örebro" name="county">Örebro</option>
            <option value="Östergötland" name="county">Östergötland</option>
            <option value="Övrigt" name="county">Övrigt</option>

        </select>
        <button type="button" onclick="getData()">Hämta data</button>
    </form>


    <div id="myDiv">
        <h2 id="lan-rubrik"></h2>
        <canvas id="myChart"></canvas>
    </div>



</body>

</html>