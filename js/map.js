function initMap() {
  myCenter=new google.maps.LatLng(51.896821, 4.580054);

  var mapOptions= {
    center:myCenter,
    zoom:15,
    scrollwheel: true,
    draggable: true,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}
