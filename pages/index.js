import React from 'react';

const BaccaratRoadmaps = () => {
  const generateRoadmapData = () => {
    // Generate sample data
    const data = [
      { result: 'B', count: 10 },
      { result: 'P', count: 8 },
      { result: 'T', count: 2 },
      // Add more records as needed
    ];

    return data;
  };

  const generateBigRoad = (data) => {
    // Create the Big Road roadmap
    const bigRoad = [];
    let currentColumn = 0;
    let currentRow = 0;

    data.forEach((record) => {
      const { result, count } = record;

      // Add rows to the bigRoad array based on the count
      for (let i = 0; i < count; i++) {
        if (!bigRoad[currentRow]) {
          bigRoad[currentRow] = [];
        }

        bigRoad[currentRow][currentColumn] = result;
        currentRow++;
      }

      currentColumn++;
      currentRow = 0;
    });

    return bigRoad;
  };

  const generateBigEyeBoy = (bigRoad) => {
    // Create the Big Eye Boy roadmap based on the Big Road data
    const bigEyeBoy = [];

    bigRoad.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (col === 'B' || col === 'P') {
          if (!bigEyeBoy[rowIndex]) {
            bigEyeBoy[rowIndex] = [];
          }

          const isDuplicate =
            (rowIndex > 0 && bigRoad[rowIndex - 1][colIndex] === col) ||
            (colIndex > 0 && bigEyeBoy[rowIndex][colIndex - 1] === col);

          bigEyeBoy[rowIndex][colIndex] = isDuplicate ? 'D' : col;
        }
      });
    });

    return bigEyeBoy;
  };

  const generateSmallRoad = (bigRoad) => {
    // Create the Small Road roadmap based on the Big Road data
    const smallRoad = [];

    bigRoad.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (col === 'B' || col === 'P') {
          if (!smallRoad[rowIndex]) {
            smallRoad[rowIndex] = [];
          }

          const isDuplicate =
            (rowIndex > 0 && bigRoad[rowIndex - 1][colIndex] === col) ||
            (colIndex > 0 && smallRoad[rowIndex][colIndex - 1] === col);

          smallRoad[rowIndex][colIndex] = isDuplicate ? 'D' : col;
        }
      });
    });

    return smallRoad;
  };

  const generateCockroachPig = (bigRoad) => {
    // Create the Cockroach Pig roadmap based on the Big Road data
    const cockroachPig = [];

    bigRoad.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (col === 'B' || col === 'P') {
          if (!cockroachPig[rowIndex]) {
            cockroachPig[rowIndex] = [];
          }

          const isDuplicate =
            (rowIndex > 0 && bigRoad[rowIndex - 1][colIndex] === col) ||
            (colIndex > 0 && cockroachPig[rowIndex][colIndex - 1] === col);

          cockroachPig[rowIndex][colIndex] = isDuplicate ? 'D' : col;
        }
      });
    });

    return cockroachPig;
  };

  const data = generateRoadmapData();
  const bigRoad = generateBigRoad(data);
  const bigEyeBoy = generateBigEyeBoy(bigRoad);
  const smallRoad = generateSmallRoad(bigRoad);
  const cockroachPig = generateCockroachPig(bigRoad);

  return (
    <div>
      <h1>Big Road</h1>
      <table>
        <tbody>
          {bigRoad.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((col, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Big Eye Boy</h1>
      <table>
        <tbody>
          {bigEyeBoy.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((col, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Small Road</h1>
      <table>
        <tbody>
          {smallRoad.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((col, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`}>{col == 'D' ? 'RED' : 'BLUE'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Cockroach Pig</h1>
      <table>
        <tbody>
          {cockroachPig.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((col, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`}>{col == 'D' ? 'RED' : 'BLUE' }</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BaccaratRoadmaps;
