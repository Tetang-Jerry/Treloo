// function updateSliderValue() {
//     var rangi = document.getElementById('rangeSlider');
//     var output = document.getElementById('sliderValue');
//     var val = document.getElementById('moneyValue');
//     output.textContent = rangi.value;
//     val.textContent = rangi.value;
// }

function mapValue(inputValue, inputMin, inputMax, outputMin, outputMax) {

    return outputMin + ((inputValue - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin)
}

function updateSliderValue() {
    var rangi = document.getElementById('rangeSlider');
    let inputValue = rangi.value;
    
    let firstRange = mapValue(inputValue, 0, 100, 50, 5000);
    var secondRange = mapValue(inputValue, 0, 100, 17.50, 7.38);

    document.getElementById('sliderValue').textContent = firstRange.toFixed(0);
    document.getElementById('moneyValue').textContent = secondRange.toFixed(2);

    let hid = document.getElementById('hid');
    if(parseFloat(firstRange.toFixed(2)) === 5000) {
        hid.classList.remove('hidden');
    } 
    else {
        hid.classList.add('hidden')
    }


}

window.onload = function() {
    var rangi = document.getElementById('sliderValue');
    rangi.value = 50;
    updateSliderValue();
};

