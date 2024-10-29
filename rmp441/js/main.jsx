import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Post from "./post";
import RateMyPoliticians from './ratemypoliticians';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




// Create a root
const root = createRoot(document.getElementById("reactEntry"));

// This method is only called once
// Insert the post component into the DOM


root.render(
  <StrictMode>
    <Router>
    <Post url="/uploads/DoBhY_h__400x400.jpg" name = "Debbie Dingell" />
    <Post url="/uploads/Q6YACEPYJZDMVJIASQDNLC25PI.jpg" name = "Jason Morgan" />
    <Post url="/uploads/Q6YACEPYJZDMVJIASQDNLC25PI.jpg" name = "Travis Radina" />
    <Routes>
        <Route path="/page2/:param" element={<RateMyPoliticians />} />
      </Routes>
    </Router>
  </StrictMode>
);
