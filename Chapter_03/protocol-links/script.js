// script.js

function toggle () {
    const chart = document.getElementById('chart');
    let hidden = (chart.style.visibility !== 'visible');
    chart.style.visibility = (hidden) ? 'visible' : 'hidden';
    chart.style.height = (hidden) ? 'auto' : '0px';
}
