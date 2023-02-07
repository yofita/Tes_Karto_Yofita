var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
              maxZoom: 19,
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_lokasifasilitas_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://103.152.118.94:8080/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "yofita:lokasifasilitas",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "lokasifasilitas",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_lokasifasilitas_1, 0]);
var lyr_jaringanjalan_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://103.152.118.94:8080/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "yofita:jaringanjalan",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "jaringanjalan",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_jaringanjalan_2, 0]);
var lyr_poligonpersil_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://103.152.118.94:8080/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "yofita:poligonpersil",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "poligonpersil",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_poligonpersil_3, 0]);

lyr_OSMStandard_0.setVisible(true);lyr_lokasifasilitas_1.setVisible(true);lyr_jaringanjalan_2.setVisible(true);lyr_poligonpersil_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_lokasifasilitas_1,lyr_jaringanjalan_2,lyr_poligonpersil_3];
