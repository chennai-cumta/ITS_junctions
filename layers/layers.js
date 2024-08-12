var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ATCS_1 = new ol.format.GeoJSON();
var features_ATCS_1 = format_ATCS_1.readFeatures(json_ATCS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATCS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATCS_1.addFeatures(features_ATCS_1);
var lyr_ATCS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATCS_1, 
                style: style_ATCS_1,
                popuplayertitle: "ATCS",
                interactive: false,
                title: '<img src="styles/legend/ATCS_1.png" /> ATCS'
            });
var format_VMS_2 = new ol.format.GeoJSON();
var features_VMS_2 = format_VMS_2.readFeatures(json_VMS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VMS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VMS_2.addFeatures(features_VMS_2);
var lyr_VMS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VMS_2, 
                style: style_VMS_2,
                popuplayertitle: "VMS",
                interactive: false,
                title: '<img src="styles/legend/VMS_2.png" /> VMS'
            });
var format_ATCCType1_3 = new ol.format.GeoJSON();
var features_ATCCType1_3 = format_ATCCType1_3.readFeatures(json_ATCCType1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATCCType1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATCCType1_3.addFeatures(features_ATCCType1_3);
var lyr_ATCCType1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATCCType1_3, 
                style: style_ATCCType1_3,
                popuplayertitle: "ATCC Type 1",
                interactive: false,
                title: '<img src="styles/legend/ATCCType1_3.png" /> ATCC Type 1'
            });
var format_ATCCType2_4 = new ol.format.GeoJSON();
var features_ATCCType2_4 = format_ATCCType2_4.readFeatures(json_ATCCType2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATCCType2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATCCType2_4.addFeatures(features_ATCCType2_4);
var lyr_ATCCType2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATCCType2_4, 
                style: style_ATCCType2_4,
                popuplayertitle: "ATCC Type 2",
                interactive: false,
                title: '<img src="styles/legend/ATCCType2_4.png" /> ATCC Type 2'
            });
var format_TIDS_5 = new ol.format.GeoJSON();
var features_TIDS_5 = format_TIDS_5.readFeatures(json_TIDS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIDS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIDS_5.addFeatures(features_TIDS_5);
var lyr_TIDS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIDS_5, 
                style: style_TIDS_5,
                popuplayertitle: "TIDS",
                interactive: false,
                title: '<img src="styles/legend/TIDS_5.png" /> TIDS'
            });
var format_SLVD_6 = new ol.format.GeoJSON();
var features_SLVD_6 = format_SLVD_6.readFeatures(json_SLVD_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLVD_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLVD_6.addFeatures(features_SLVD_6);
var lyr_SLVD_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLVD_6, 
                style: style_SLVD_6,
                popuplayertitle: "SLVD",
                interactive: false,
                title: '<img src="styles/legend/SLVD_6.png" /> SLVD'
            });
var format_RLVD_7 = new ol.format.GeoJSON();
var features_RLVD_7 = format_RLVD_7.readFeatures(json_RLVD_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RLVD_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RLVD_7.addFeatures(features_RLVD_7);
var lyr_RLVD_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RLVD_7, 
                style: style_RLVD_7,
                popuplayertitle: "RLVD",
                interactive: false,
                title: '<img src="styles/legend/RLVD_7.png" /> RLVD'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_ATCS_1.setVisible(true);lyr_VMS_2.setVisible(true);lyr_ATCCType1_3.setVisible(true);lyr_ATCCType2_4.setVisible(true);lyr_TIDS_5.setVisible(true);lyr_SLVD_6.setVisible(true);lyr_RLVD_7.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ATCS_1,lyr_VMS_2,lyr_ATCCType1_3,lyr_ATCCType2_4,lyr_TIDS_5,lyr_SLVD_6,lyr_RLVD_7];
lyr_ATCS_1.set('fieldAliases', {'Sl.No': 'Sl.No', 'Location N': 'Location N', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Corridors': 'Corridors', 'Intersecti': 'Intersecti', });
lyr_VMS_2.set('fieldAliases', {'Sl.No': 'Sl.No', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location D': 'Location D', });
lyr_ATCCType1_3.set('fieldAliases', {'Sl.No': 'Sl.No', 'ATCC ID': 'ATCC ID', 'Device ID': 'Device ID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location D': 'Location D', });
lyr_ATCCType2_4.set('fieldAliases', {'Sl.No': 'Sl.No', 'ATCC ID': 'ATCC ID', 'Device ID': 'Device ID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location D': 'Location D', });
lyr_TIDS_5.set('fieldAliases', {'Sl.No': 'Sl.No', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location D': 'Location D', });
lyr_SLVD_6.set('fieldAliases', {'Sl.No': 'Sl.No', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location D': 'Location D', });
lyr_RLVD_7.set('fieldAliases', {'Sl.No': 'Sl.No', 'Location N': 'Location N', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Corridors': 'Corridors', });
lyr_ATCS_1.set('fieldImages', {'Sl.No': 'TextEdit', 'Location N': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Corridors': 'TextEdit', 'Intersecti': 'TextEdit', });
lyr_VMS_2.set('fieldImages', {'Sl.No': '', 'Latitude': '', 'Longitude': '', 'Location D': '', });
lyr_ATCCType1_3.set('fieldImages', {'Sl.No': '', 'ATCC ID': '', 'Device ID': '', 'Latitude': '', 'Longitude': '', 'Location D': '', });
lyr_ATCCType2_4.set('fieldImages', {'Sl.No': '', 'ATCC ID': '', 'Device ID': '', 'Latitude': '', 'Longitude': '', 'Location D': '', });
lyr_TIDS_5.set('fieldImages', {'Sl.No': '', 'Latitude': '', 'Longitude': '', 'Location D': '', });
lyr_SLVD_6.set('fieldImages', {'Sl.No': '', 'Latitude': '', 'Longitude': '', 'Location D': '', });
lyr_RLVD_7.set('fieldImages', {'Sl.No': '', 'Location N': '', 'Latitude': '', 'Longitude': '', 'Corridors': '', });
lyr_ATCS_1.set('fieldLabels', {'Sl.No': 'hidden field', 'Location N': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Corridors': 'hidden field', 'Intersecti': 'inline label - always visible', });
lyr_VMS_2.set('fieldLabels', {'Sl.No': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Location D': 'no label', });
lyr_ATCCType1_3.set('fieldLabels', {'Sl.No': 'no label', 'ATCC ID': 'no label', 'Device ID': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Location D': 'no label', });
lyr_ATCCType2_4.set('fieldLabels', {'Sl.No': 'no label', 'ATCC ID': 'no label', 'Device ID': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Location D': 'no label', });
lyr_TIDS_5.set('fieldLabels', {'Sl.No': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Location D': 'no label', });
lyr_SLVD_6.set('fieldLabels', {'Sl.No': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Location D': 'no label', });
lyr_RLVD_7.set('fieldLabels', {'Sl.No': 'no label', 'Location N': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Corridors': 'no label', });
lyr_RLVD_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});