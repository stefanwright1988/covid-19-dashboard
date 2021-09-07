import React, { useContext, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  ZoomableGroup,
} from "react-simple-maps";
import { AppContext } from "../../context/AppContext";
import ReactTooltip from "react-tooltip";

const SimpleMap = (props: any) => {
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const [tooltipContent, setTooltipContent] = useState("");
  const { mapZoom, mapCenter, mapCountries } = useContext(AppContext);
  return (
    <>
      <ComposableMap data-tip="">
        <ZoomableGroup zoom={mapZoom} center={mapCenter}>
          <Graticule stroke="#F53" />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, POP_EST, POP_YEAR, ISO_A2 } = geo.properties;
                    const selectedCountry = mapCountries.find(
                      (obj) => obj["countryInfo"]["iso2"] === ISO_A2
                    );
                    setTooltipContent(
                      `<div>
                      <h3>
                      ${NAME}
                      </h3>
                      <p>Population (year): ${Number(
                        POP_EST
                      ).toLocaleString()} (${POP_YEAR})</p>
                      <p>Cases to date (population %): ${Number(
                        selectedCountry?.cases || 0
                      ).toLocaleString()} (${Number(
                        (Number(selectedCountry?.cases || 0) /
                          Number(POP_EST)) *
                          100
                      ).toPrecision(3)}%)</p>
                      <p>Active cases (cases %): ${Number(
                        selectedCountry?.active || 0
                      ).toLocaleString()} (${Number(
                        (Number(selectedCountry?.active || 0) /
                          Number(selectedCountry?.cases || 0)) *
                          100
                      ).toPrecision(3)}%)</p>
                      <p>Deaths to date (cases %): ${Number(
                        selectedCountry?.deaths || 0
                      ).toLocaleString()} (${Number(
                        (Number(selectedCountry?.deaths || 0) /
                          Number(selectedCountry?.cases || 0)) *
                          100
                      ).toPrecision(3)}%)</p>
                      <p>Recovered to date (cases %): ${Number(
                        selectedCountry?.recovered || 0
                      ).toLocaleString()} (${Number(
                        (Number(selectedCountry?.recovered || 0) /
                          Number(selectedCountry?.cases || 0)) *
                          100
                      ).toPrecision(3)}%)</p>
                      </div>`
                    );
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <ReactTooltip html={true}>{tooltipContent}</ReactTooltip>
    </>
  );
};

export default SimpleMap;
