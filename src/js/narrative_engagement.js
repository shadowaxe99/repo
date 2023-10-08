```javascript
import * as d3 from 'd3';
import { displayModalPopup } from './ai_challenges.js';

const futuristicGraphs = document.getElementById('futuristicGraphs');

// Function to embed futuristic graphs
function embedGraph(data, element) {
    const svg = d3.select(element)
        .append('svg')
        .attr('width', 500)
        .attr('height', 500);

    const simulation = d3.forceSimulation(data)
        .force('charge', d3.forceManyBody().strength(-50))
        .force('center', d3.forceCenter(250, 250))
        .force('collision', d3.forceCollide().radius(30))
        .on('tick', ticked);

    function ticked() {
        const u = d3.select('svg')
            .selectAll('circle')
            .data(data);

        u.enter()
            .append('circle')
            .attr('r', 30)
            .merge(u)
            .attr('cx', function(d) {
                return d.x;
            })
            .attr('cy', function(d) {
                return d.y;
            });

        u.exit().remove();
    }
}

// Function to display futuristic graphs
function displayFuturisticGraphs() {
    fetch('src/assets/data/graphs.json')
        .then(response => response.json())
        .then(data => {
            embedGraph(data, futuristicGraphs);
        })
        .catch(error => {
            console.error('Error:', error);
            displayModalPopup('Error loading graphs. Please try again later.');
        });
}

displayFuturisticGraphs();
```