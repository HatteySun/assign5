import React from "react";

export { XAxis, YAxis };
//TODO: complete the YAxis
// 1.Draw the y-axis, using <line>;
// 2.Draw the ticks, using yScale.domain() to get the ticks (i.e., names of airlines);
// For each tick line, we set x1={-5}, x2={0}, y1 and y2 are the half of yScale.bandwidth()
// For the tick text, we set style={{textAnchor: 'start', fontSize:'10px'}}, x={-offsetX+10},y={yScale.bandwidth()/2}
function YAxis (props) {
    const { yScale, height, offsetX } = props;
    // return <g>
        
    // </g>
    return (
        <g className="axis-y">
          <line x1={offsetX} x2={offsetX} y1={0} y2={height} stroke="black" />
          {yScale.domain().map((airlineName) => {
            const y = yScale(airlineName) + yScale.bandwidth() / 2;
            return (
              <g key={airlineName} transform={`translate(${offsetX}, ${y})`}>
                <line x1={-5} x2={0} stroke="black" />
                <text
                  x={-offsetX-120}
                  dy=".32em"
                  style={{ textAnchor: 'start', fontSize: '10px' }}
                >
                  {airlineName}
                </text>
              </g>
              );
        })}
        </g>
      );
}

function XAxis(props) {
    const { xScale, width, height} = props;

    return <g transform={`translate(${0}, ${height})`}>
        {<line x2={width} stroke='black'/>}
        <line x1={250} x2={width} y1={336} y2={336} stroke="black" /> {/* This is the X-axis line */}
        {xScale.ticks(5).map(tickValue => 
            <g key={tickValue} transform={`translate(${xScale(tickValue)}, ${335})`}>
                <line y2={10} stroke='black' />
                <text style={{ textAnchor:'end', fontSize:'10px' }} x={5} y={18}>
                    {tickValue}
                </text>
            </g>
        )}
    </g>
    
}
// return (
//   <g transform={`translate(0, ${height})`}>
//       <line x1={0} x2={width} stroke='black' />
//       {xScale.ticks(5).map(tickValue => (
//           <g key={tickValue} transform={`translate(${xScale(tickValue)}, 0)`}>
//               <line y1={0} y2={5} stroke='black' />
//               <text
//                   x={0} 
//                   y={15} // This positions the label below the tick lines
//                   style={{ textAnchor: 'middle', fontSize: '10px' }}
//               >
//                   {tickValue}
//               </text>
//           </g>
//       ))}
//   </g>
// );
// }
