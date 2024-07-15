
// Premier tableau
  
 const table1 = document.querySelector('h3');
const datas1 = document.createElement('div');
table1.appendChild(datas1);
const canva1 = document.createElement('canvas');
datas1.appendChild(canva1);
const table1_full = document.getElementById('table1');
const t1_tr = table1_full.querySelectorAll('tbody tr');

const labels = [];
const data = [];

// Iterate over each row to extract data
t1_tr.forEach(row => {
    const cells = row.querySelectorAll('td');
    if (cells.length > 0) {
        labels.push(cells[0].innerText); // Extract category (first cell)
        data.push(parseFloat(cells[1].innerText)); // Extract value (second cell) and convert to number
    }
});

const ctx = document.getElementById('canva1').getContext('2d'); // Use the created canvas element
new Chart(ctx, { // Use the Chart constructor
    type: 'line', // You can change the chart type here
    data: {
        labels: labels,
        datasets: [{
            label: 'Values',
            data: data,
            borderWidth: 3,
            backgroundColor: '#008000',
            borderColor: '#FFA500',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// deuxieme tableau

const table2 = document.getElementById('Homicides');
const datas2 = document.createElement('div');
table2.appendChild(datas2);
const canva2 = document.createElement('canvas');
datas2.appendChild(canva2);
const table2_full = document.getElementById('table2');
const t1_tr2 = table2_full.querySelectorAll('tbody tr');

const labels2 = [];
const data2 = [];

t1_tr2.forEach(row => {
    const cells2 = row.querySelectorAll('td');
    if (cells2.length > 0) {
        labels2.push(cells2[0].innerText); // Extract category (first cell)
        data2.push(parseFloat(cells2[1].innerText)); // Extract value (second cell) and convert to number
    }
});

const ctx2 = document.getElementById(canva2).getContext('3d'); // Use the created canvas element
new Chart(ctx2, { // Use the Chart constructor
    type: 'bar', // You can change the chart type here
    data: {
        labels: labels2,
        datasets: [{
            label: 'Values',
            data: data2,
            borderWidth: 1,
            backgroundColor: '#800000',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//troisième tab
var tab3;

var data3 = document.createElement("div");
var parent3 = document.querySelector("h1").parentNode;
parent3.insertBefore(data3, document.querySelector("#bodyContent"));

const canva3 = document.createElement("canvas");
canva3.width = 10;
data3.appendChild(canva3);
const ctx3 = document.getElementById(canva3).getContext("2d");

var dataPoints = [];

var data3 = new Chart(ctx3, {
    type: 'bubble',
    data: {
        labels: [],
        datasets: [{
            label: 'Data Points',
            data: dataPoints,
            fill: false,
            borderColor: '#9400D3',
            tension: 0.1,
            backgroundColor: 'yellow'

        }]
    },
});

function fetchData() {
    var url = "https://canvasjs.com/services/data/datapoints.php?xstart=" + (dataPoints.length + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1]) + "&length=1&type=json";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                dataPoints.push(data[0][1]);
                data3.data.labels.push(data[0][0]);
                data3.update();
            }
            console.log(dataPoints)
        })
        .catch(error => console.error("Error fetching data: " + error));

    setTimeout(fetchData, 1000);
}

fetchData(); 

