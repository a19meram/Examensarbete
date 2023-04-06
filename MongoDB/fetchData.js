var myChart, myChart2;
function getData() {
    var county = $("#county").val();
    var iterations = 0;
    var totalElapsedTime = 0;
    var iterationCount = 0;
    var timeData = '';

    function sendRequest() {
        var start = Date.now();
        $.ajax({
            url: 'Mongo_DB_Connection.php',
            type: 'GET',
            dataType: 'json',
            data: { county: county },
            success: function (data) {
                $("#lan-rubrik").html("Data för: " + county);
                $("#lan-rubrik2").html("Data för: " + county);
                togellfun(data);

                var end = Date.now();
                var elapsedTime = end - start;
                totalElapsedTime += elapsedTime;
                iterationCount++;
                timeData += elapsedTime + "\n";
                console.log("Iteration " + iterationCount + ": " + elapsedTime + " ms");

                if (iterationCount < iterations) {
                    sendRequest();
                } else {
                    console.log("All Total iterations: " + iterationCount);
                    download("timeDataMongoDB.txt", timeData);
                }
            }
        });
    }
    sendRequest();

    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
}

function togellfun(data) {
    var chartType = $('select[name=chartType]').val();
    if (chartType == 'stapel') {
        $('#myDiv2').hide();
        $('#myDiv').show();
        $('#lan-rubrik').show();
    } else if (chartType == 'piechart') {
        $('#myDiv').hide();
        $('#myDiv2').show();
        $('#lan-rubrik2').show();
    }
    generateChart(data);
    generateChart2(data);

}

function generateChart(data) {

}
function generateChart2(data) {

}