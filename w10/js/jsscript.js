function toggleNightDay() {
    var body = document.body;
    var h1 = document.querySelector('h1');
    var paragraphs = document.querySelectorAll('p');
    var ol = document.querySelector('li');
    if (document.querySelector('#night_day').value === 'day') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        h1.style.fontSize = '2em'; // Normal size
        h1.style.fontFamily = 'Arial, sans-serif';
        paragraphs.forEach(p => {
            p.style.fontSize = '16px';
            p.style.fontFamily = 'Georgia, serif';
        });
        document.querySelector('#night_day').value = 'night';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        h1.style.fontSize = '1.5em';
        ol.style.color = 'pink';
        h1.style.fontFamily = 'Helvetica, sans-serif';
        paragraphs.forEach(p => {
            p.style.fontSize = '18px';
            p.style.fontFamily = 'Courier, monospace';
        });
        document.querySelector('#night_day').value = 'day';
    }
}