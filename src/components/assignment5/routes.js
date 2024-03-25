import React from "react";

function Routes(props){
    const {projection, routes, selectedAirline} = props;
    console.log(selectedAirline)
    // TODO: 
    // return the routes of the selected airline; 
    // If the selectedAirlineID is null (i.e., no airline is selected), return <g></g>.

//     return <g></g>
    
// }
    if (!selectedAirline) {
        return <g></g>;
    }

    // const selectedRoutes = routes.filter(route => route.AirlineID === selectedAirline);
    const selectedRoutes = routes.filter(route => route.AirlineID.toString() === selectedAirline.toString());
    // selectedRoutes.forEach(route => {
    //     console.log(route.AirlineID);
    //   });


    // // Generate path line string for each route
    const generatePath = route => {
        const { SourceLatitude, SourceLongitude, DestLatitude, DestLongitude } = route;
        const source = projection([SourceLongitude, SourceLatitude]);
        const destination = projection([DestLongitude, DestLatitude]);

        return `M${source[0]},${source[1]}L${destination[0]},${destination[1]}`;
    };

    return (
        <g>
            {selectedRoutes.map((route, i) => {
                const pathD = generatePath(route);
                if (!pathD) return null; // Skip rendering if the path is null

                return (
                    <path
                        key={`route-${i}`}
                        d={pathD}
                        fill="none"
                        stroke="#992a5b" //red
                        strokeWidth="0.25"
                    />
                );
            })}
        </g>
    );
}

export { Routes }