var len;
var results = '';

function callApiSearch() {
    apiSearch();
}


function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "adf9d9deb78b40a4af2a4ae473f1c418"); 
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

function displayTime() {
    $(document).ready(function () {
        let date = new Date();
        $("#btn").click(function () {
            // let value = `${date.getHours()}:${date.getMinutes()}`
            let hour = date.getHours();
            let ampm;
            if (hour > 12) {

                ampm = "pm"

                hour -= 12
            } else {
                ampm = "am"
            }
            let min = date.getMinutes();

            if (min < 10) {
                min = "0" + min;
            }

            document.getElementById('time').innerHTML = hour + ":" + min + " " + ampm;

            $('#time').dialog({
                title: "Current Time:"
            });
        });
    });
}

function changeBackground() {
    document.body.style.background = "url(https://images.unsplash.com/photo-1451188502541-13943edb6acb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80)";
    }