<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const toComponentsPage= () => {
  router.push("/componentsdashboard");
};
const toHomepage=()=>{
  router.push('/')
}
</script>
<template>
    <div class="basicsProjects">
    <button @click="toComponentsPage">back</button>
    <button @click="toHomepage">Home</button>
    <h3>Routing Diagram </h3>
    <div>
    
      <svg width="100%" height="600">
 
 
  <rect class="dashboard-box" x="50" y="10" width="500" height="300" fill="lightblue"></rect>
  <text x="200" y="40" font-size="26" font-weight="bold">Landing Page</text>
  <text x="75" y="50" font-size="12">Menu</text>
  <text x="75" y="110" font-size="12">Vue Basics</text>
  <text x="250" y="110" font-size="12">Components</text>
  <text x="400" y="110" font-size="12">Routing</text>

  <rect class="landing-button" x="55" y="60" width="60" height="30"></rect>
  <text x="60" y="80" font-size="12">Projects</text>
  <rect class="landing-button" x="75" y="130" width="110" height="30"></rect>
  <text x="80" y="150" font-size="12">Implementations</text>
  <rect class="landing-button" x="250" y="130" width="110" height="30"></rect>
  <text x="255" y="150" font-size="12">Implementations</text>
  <rect class="landing-button" x="375" y="130" width="110" height="30"></rect>
  <text x="380" y="150" font-size="12">Implementations</text>

  
  <rect class="dashboard-box" x="650" y="30" width="300" height="100" fill="lightgreen"></rect>
  <text x="690" y="60" font-size="16" font-weight="bold">Vue Basics Dashboard</text>

 
  <rect class="dashboard-box" x="650" y="200" width="300" height="100" fill="lightyellow"></rect>
  <text x="680" y="230" font-size="16" font-weight="bold">Components Dashboard</text>


  <rect class="dashboard-box" x="650" y="450" width="300" height="200" fill="lightcoral"></rect>
  <text x="690" y="470" font-size="16" font-weight="bold">Routing Dashboard</text>
  <rect class="dashboard-box" x="40" y="450" width="300" height="100" fill="lightcoral"></rect>
  <text x="80" y="470" font-size="16" font-weight="bold">Projects Dashboard</text>

 
  <path d="M440 160 L650 430" stroke="black" stroke-width="2" marker-end="url(#arrowhead)" />
  <path d="M320 160 L630 250" stroke="black" stroke-width="2" marker-end="url(#arrowhead)" />
  <path d="M185 150 L630 70" stroke="black" stroke-width="2" marker-end="url(#arrowhead)" />

  <path d="M850 100 L850 180" stroke="black" stroke-width="2" marker-end="url(#arrowhead)" />
  <rect class="landing-button" x="75" y="130" width="110" height="30"></rect>
  <text x="80" y="150" font-size="12">Implementations</text>
  <path d="M850 280 L850 430" stroke="black" stroke-width="2" marker-end="url(#arrowhead)" />
  <path d="M700 100 L570 100" stroke="black" stroke-width="2" marker-end="url(#arrowhead)" />
  <path d="M700 250 L700 150" stroke="black" stroke-width="2" marker-end="url(#arrowhead)" />
  <path d="M700 520 L700 320" stroke="black" stroke-width="2" marker-end="url(#arrowhead)" />
  <path d="M500 570 L500 330" stroke="black" stroke-width="2" marker-end="url(#arrowhead)" />
  <path d="M850 570 L520 570" stroke="black" stroke-width="2" marker-end="url(#arrowhead)" />
  <path d="M280 500 L280 330" stroke="black" stroke-width="2" marker-end="url(#arrowhead)" />
  <path d="M60 90 L60 430" stroke="black" stroke-width="2" marker-end="url(#arrowhead)" />
  <rect class="dashboard-button" x="680" y="80" width="50" height="30"></rect>
  <text x="690" y="100" font-size="12">Back</text>
  <rect class="dashboard-button" x="830" y="80" width="50" height="30"></rect>
  <text x="840" y="100" font-size="12">Next</text>

 
  <rect class="dashboard-button" x="680" y="250" width="50" height="30"></rect>
  <text x="690" y="270" font-size="12">Back</text>
  <rect class="dashboard-button" x="830" y="250" width="50" height="30"></rect>
  <text x="840" y="270" font-size="12">Next</text>


  <rect class="dashboard-button" x="680" y="500" width="50" height="30"></rect>
  <text x="690" y="520" font-size="12">Back</text>
  <rect class="dashboard-button" x="830" y="550" width="50" height="30"></rect>
  <text x="840" y="570" font-size="12">Home</text>
  
  <rect class="dashboard-button" x="250" y="500" width="50" height="30"></rect>
  <text x="260" y="520" font-size="12">Home</text>
  
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="black" />
    </marker>
  </defs>
</svg>

    </div>
    </div>
 
      
    </template>
    <style scoped>
    .basicsProjects {
  background-color: rgb(252, 249, 249);
  padding: 10px 10px;
  height: 100%;
}
h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  font-size: 30px;
}
h3:hover {
  color: rgb(84, 102, 102);
}
button {
  margin: 10px;
  background-color: rgb(221, 221, 209);
  border-radius: 3px;
}
.dashboard-box {
      stroke: black;
      stroke-width: 2;
    
      filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.2));
    }

    .landing-button {
      fill: white;
      stroke: rgb(73, 68, 68);
      stroke-width: 3;
   
      cursor: pointer;
      transition: fill 0.3s ease;
      border-radius: 10px;
    }

    .landing-button:hover {
      fill: #b2bec3;
    }

    .dashboard-button {
      fill: #74b9ff;
      stroke: black;
      stroke-width: 1;
     
      cursor: pointer;
      transition: fill 0.3s ease;
    }

    .dashboard-button:hover {
      fill: #0984e3;
    }

    text {
      font-family: Arial, sans-serif;
      fill: black;
      text-align: center;
    }
    </style>