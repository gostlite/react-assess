import React from "react";
import "../../dashboard.css"
import Table from "./table";


export default function Dashboard() {
    return <div className="dashboard-container">
  <div className="sidebar">
    <h2>Dashboard</h2>
  </div>
  <div className="main-content">
    <h2>Overview</h2>

            <Table />
        </div>
    </div>
        
}