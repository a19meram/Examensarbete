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
                    
                }
            }
        });
    }
    sendRequest();
}

function togellfun(data) {

}

function generateChart(data) {

}
function generateChart2(data) {

}