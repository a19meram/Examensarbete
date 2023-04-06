var myChart, myChart2;
function getData() {
    var county = $("#county").val();
    var iterations = 0;
    var totalElapsedTime = 0;
    var iterationCount = 0;
    var timeData = '';

    function sendRequest() {
        $.ajax({
            url: 'Mongo_DB_Connection.php',
            type: 'GET',
            dataType: 'json',
            data: { county: county },
            success: function (data) {
                $("#lan-rubrik").html("Data för: " + county);
                $("#lan-rubrik2").html("Data för: " + county);
                togellfun(data);
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