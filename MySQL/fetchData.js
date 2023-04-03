function getData() {
    var county = $("#county").val();
    var iterations = 0;
    var totalElapsedTime = 0;
    var iterationCount = 0;
    var timeData = '';

    function sendRequest() {
        var start = Date.now();
        $.ajax({
            url: "Mysql_DB_Connection.php?county=" + county,
            dataType: "json",
            success: function (data) {
                $("#lan-rubrik").html("Data för: " + county);
                $("#myDiv").css("display", "block");

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
                    download("timeDataMySQL.txt", timeData); 
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