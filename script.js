setTimeout(function(){
  var x = document.getElementById('navObj');
  var networkData = {};
  for (var key in navigator) {
    if (typeof navigator[key] !== "function") {
      networkData[key] = navigator[key];
    }
  }
  x.value = JSON.stringify(networkData);
}, 1000);
