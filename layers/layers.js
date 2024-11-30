ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:20438").setExtent([565486.544862, 2684061.569094, 780570.421900, 2786677.922643]);
var wms_layers = [];

var format_Neighborhoods_2015_0 = new ol.format.GeoJSON();
var features_Neighborhoods_2015_0 = format_Neighborhoods_2015_0.readFeatures(json_Neighborhoods_2015_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20438'});
var jsonSource_Neighborhoods_2015_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neighborhoods_2015_0.addFeatures(features_Neighborhoods_2015_0);
var lyr_Neighborhoods_2015_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neighborhoods_2015_0, 
                style: style_Neighborhoods_2015_0,
                popuplayertitle: "Neighborhoods_2015",
                interactive: true,
    title: 'Neighborhoods_2015<br />\
    <img src="styles/legend/Neighborhoods_2015_0_0.png" /> 1 - 3,060<br />\
    <img src="styles/legend/Neighborhoods_2015_0_1.png" /> 3,060 - 11,501<br />\
    <img src="styles/legend/Neighborhoods_2015_0_2.png" /> 11,501 - 24,905<br />\
    <img src="styles/legend/Neighborhoods_2015_0_3.png" /> 24,905 - 49,420<br />\
    <img src="styles/legend/Neighborhoods_2015_0_4.png" /> 49,420 - 139,446<br />'
        });

lyr_Neighborhoods_2015_0.setVisible(true);
var layersList = [lyr_Neighborhoods_2015_0];
lyr_Neighborhoods_2015_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NEIGHBORH_': 'NEIGHBORH_', 'NEIGHBORH1': 'NEIGHBORH1', 'OLD_NEIGHB': 'OLD_NEIGHB', 'SUB_MUNC_I': 'SUB_MUNC_I', 'SUB_MUNC_A': 'SUB_MUNC_A', 'SUB_MUNC_E': 'SUB_MUNC_E', 'OLD_SUB_MU': 'OLD_SUB_MU', 'OLD_SUB__1': 'OLD_SUB__1', 'NEIGHBOR_1': 'NEIGHBOR_1', 'POPULATION': 'POPULATION', 'DEV_AREA': 'DEV_AREA', 'DEV_AREA_K': 'DEV_AREA_K', 'STREETS_LE': 'STREETS_LE', 'STREETS__1': 'STREETS__1', 'STREETS_AR': 'STREETS_AR', 'STREETS__2': 'STREETS__2', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'Area': 'Area', });
lyr_Neighborhoods_2015_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'NEIGHBORH_': 'TextEdit', 'NEIGHBORH1': 'TextEdit', 'OLD_NEIGHB': 'TextEdit', 'SUB_MUNC_I': 'TextEdit', 'SUB_MUNC_A': 'TextEdit', 'SUB_MUNC_E': 'TextEdit', 'OLD_SUB_MU': 'TextEdit', 'OLD_SUB__1': 'TextEdit', 'NEIGHBOR_1': 'TextEdit', 'POPULATION': 'TextEdit', 'DEV_AREA': 'TextEdit', 'DEV_AREA_K': 'TextEdit', 'STREETS_LE': 'TextEdit', 'STREETS__1': 'TextEdit', 'STREETS_AR': 'TextEdit', 'STREETS__2': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'Area': 'TextEdit', });
lyr_Neighborhoods_2015_0.set('fieldLabels', {'OBJECTID': 'no label', 'NEIGHBORH_': 'no label', 'NEIGHBORH1': 'inline label - always visible', 'OLD_NEIGHB': 'no label', 'SUB_MUNC_I': 'no label', 'SUB_MUNC_A': 'no label', 'SUB_MUNC_E': 'no label', 'OLD_SUB_MU': 'no label', 'OLD_SUB__1': 'no label', 'NEIGHBOR_1': 'no label', 'POPULATION': 'inline label - always visible', 'DEV_AREA': 'no label', 'DEV_AREA_K': 'no label', 'STREETS_LE': 'no label', 'STREETS__1': 'no label', 'STREETS_AR': 'no label', 'STREETS__2': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', 'Area': 'no label', });
lyr_Neighborhoods_2015_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});