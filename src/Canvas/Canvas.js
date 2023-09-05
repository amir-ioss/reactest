// src/components/Canvas.js

import React, { useRef, useEffect } from "react";
import test_data from "./test_data.json";
var lineWidth = 100;

// https://www.babypips.com/learn/forex/how-to-trade-chart-patterns

function drawLine(ctx, x1, y1, x2, y2, stroke = "black", width = 3) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = width;
  ctx.stroke();
}

function findP_(data) {
  if (data.length < 3) {
    // Not enough data points to form a pattern
    return false;
  }

  let isRising = false;
  let peakIndex = -1;

  for (let i = 1; i < data.length - 1; i++) {
    if (data[i] > data[i - 1] && data[i] > data[i + 1]) {
      // Found a potential peak
      isRising = true;
      peakIndex = i;
    } else if (data[i] < data[i - 1] && data[i] < data[i + 1] && isRising) {
      // Found a potential lower peak after a rise
      isRising = false;
      if (peakIndex !== -1) {
        // Check if the difference between the two peaks is not too large
        const peakDifference = data[peakIndex] - data[i];
        if (peakDifference <= 50) {
          // You can adjust the threshold (10 in this example) as needed
          return true;
        }
      }
    }
  }

  return false;
}


function findP(data) {
  if (data.length < 3) {
    // Not enough data points to form a pattern
    return false;
  }

  let isRising = false;
  let peakIndex = -1;

  for (let i = 1; i < data.length - 1; i++) {
    if (data[i] > data[i - 1] && data[i] > data[i + 1]) {
      // Found a potential peak
      isRising = true;
      peakIndex = i;
    } else if (data[i] < data[i - 1] && data[i] < data[i + 1] && isRising) {
      // Found a potential lower peak after a rise
      isRising = false;
      if (peakIndex !== -1) {
        // Check if the difference between the two peaks is not too large
        const peakDifference = data[peakIndex] - data[i];
        if (peakDifference <= 50) {
          // You can adjust the threshold (10 in this example) as needed
          return true;
        }
      }
    }
  }

  return false;
}

const Draw = (ctx) => {
  var data = test_data.map((_) => 900 - _ * 5);
  const hasPattern = findP(test_data);

  
  if (hasPattern) {
    console.log("YEEEEEEEEEEEEES");
  } else {
    console.log("Nooooooooooooo");
  }

  // draw
  data.forEach((val, idx) => {
    if (idx < 1) return;
    let x1 = idx * lineWidth;
    let y1 = data[idx - 1];
    let x2 = idx * lineWidth + lineWidth;
    let y2 = data[idx];
    return drawLine(ctx, x1, y1, x2, y2, "tomato", 1);
  });
};

const Canvas = () => {
  const canvasRef = useRef(null);
  let ctx = null;

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    Draw(ctx);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={1500} // Set your desired canvas width
      height={900} // Set your desired canvas height
    />
  );
};

export default Canvas;
