<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fordons relaterade skulder dataset</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" href="../MySQL/style.css">
    <script src="fetchData.js"></script>
</head>
<body>
    <form>
        <label for="county">Län:</label>
        <select id="county" name="county">
            <option disabled selected>Välj län</option>
            <option value="alla" name="county">Alla</option>
            <option value="BLEKINGE" name="county">Blekinge</option>
            <option value="DALARNA" name="county">Dalarna</option>
            <option value="GOTLAND" name="county">Gotland</option>
            <option value="GÄVLEBORG" name="county">Gävleborg</option>
            <option value="HALLAND" name="county">Halland</option>
            <option value="JÄMTLAND" name="county">Jämtland</option>
            <option value="JÖNKÖPING" name="county">Jönköping</option>
            <option value="KALMAR" name="county">Kalmar</option>
            <option value="KRONOBERG" name="county">Kronoberg</option>
            <option value="NORRBOTTEN" name="county">Norrbotten</option>
            <option value="SKÅNE" name="county">Skåne</option>
            <option value="STOCKHOLM" name="county">Stockholm</option>
            <option value="SÖDERMANLAND" name="county">Södermanland</option>
            <option value="UPPSALA" name="county">Uppsala</option>
            <option value="VÄRMLAND" name="county">Värmland</option>
            <option value="VÄSTERBOTTEN" name="county">Västerbotten</option>
            <option value="VÄSTERNORRLAND" name="county">Västernorrland</option>
            <option value="VÄSTMANLAND" name="county">Västmanland</option>
            <option value="VÄSTRA GÖTALAND" name="county">Västra Götaland</option>
            <option value="ÖREBRO" name="county">Örebro</option>
            <option value="ÖSTERGÖTLAND" name="county">Östergötland</option>
            <option value="ÖVRIGT" name="county">Övrigt</option>
        </select>
        <label for="chartType">Diagramtyp:</label>
        <select id="chartType" name="chartType">
            <option disabled selected>Välj typ</option>
            <option value="stapel">BarChart</option>
            <option value="piechart">PieChart</option>
        </select>
            <button type="button" onclick="getData()">Hämta data</button>
    </form>

    <div id="myDiv">
        <h2 id="lan-rubrik"></h2>
        <canvas id="myChart"></canvas>
    </div>
    <div id="myDiv2">
        <h2 id="lan-rubrik2"></h2>
        <canvas id="myChart2"></canvas>
    </div>
</body>
</html>
