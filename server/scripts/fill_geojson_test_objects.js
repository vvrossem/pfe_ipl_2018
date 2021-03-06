const folder = "./tests/geojsons/";
const fs = require("fs");
const graph = require("../my_modules/graph");
const config = require("../config.json");
const shortest_path = require("../my_modules/shortest_path");
const path_2_geojson = require("../my_modules/path_2_geojson");

graph.convert(config.icr_search.geojson);

let geoJsonIcr = path_2_geojson.convert(
  shortest_path.calculate({
    source_long: 4.338735111116296,
    source_lat: 50.820070369227444,
    dest_long: 4.341406007873148,
    dest_lat: 50.79994071139812
  })
);

fs.writeFileSync(
  `${folder}/timmer_arnold_icr_test.json`,
  JSON.stringify(geoJsonIcr, null, 2),
  "utf-8",
  err => {
    if (err) throw err;
  }
);

geoJsonIcr = path_2_geojson.convert(
  shortest_path.calculate({
    source_long: 4.418409863814158,
    source_lat: 50.83854259432855,
    dest_long: 4.449578660453536,
    dest_lat: 50.84759308341391
  })
);

fs.writeFileSync(
  `${folder}/francois-chapelle-icr-test.json`,
  JSON.stringify(geoJsonIcr, null, 2),
  "utf-8",
  err => {
    if (err) throw err;
  }
);
