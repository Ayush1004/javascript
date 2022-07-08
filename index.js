function submit_form() {
    var a = document.getElementById('h-1').value;
    var b = document.getElementById('h-2').value;
    if (isNaN(a) === true) {
        alert('Please Enter a Number');
    }
    if (isNaN(b) === true) {
        alert('Please Enter a Number');
    }
    a = parseInt(a);
    b = parseInt(b);
    let result = 0;
    if (document.getElementById('h-3').checked == true) {
        result = a + b;
        document.getElementById('h-8').innerHTML = 'Result - ' + result;
    } else if (document.getElementById('h-4').checked == true) {
        result = a - b;
        document.getElementById('h-8').innerHTML = 'Result - ' + result;
    } else if (document.getElementById('h-5').checked == true) {
        result = a / b;
        document.getElementById('h-8').innerHTML = 'Result - ' + result;
    } else if (document.getElementById('h-6').checked == true) {
        result = a * b;
        document.getElementById('h-8').innerHTML = 'Result - ' + result;
    } else {
        document.getElementById('h-9').innerHTML =
            'Select an operation to perform!!';
    }
}