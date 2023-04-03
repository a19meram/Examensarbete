function getData() {
    var county = $("#county").val();
    var iterations = 0;
    var totalElapsedTime = 0;
    var iterationCount = 0;
    var timeData = '';

    function sendRequest() {
        $.ajax({
            url: "Mysql_DB_Connection.php?county=" + county,
            dataType: "json",
            success: function (data) {
                $("#lan-rubrik").html("Data för: " + county);
                $("#myDiv").css("display", "block");
            }

        });
    }
    sendRequest();
}