function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);


    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        alert('Please enter valid positive numbers for weight and height.');
        document.getElementById('bmiValue').textContent = '';
        document.getElementById('bmiStatus').textContent = '';
        return;
    }


    const heightM = heightCm / 100;

    const bmi = weight / (heightM * heightM);

    document.getElementById('bmiValue').textContent = bmi.toFixed(2); 

    let status;
    if (bmi < 18.5) {
        status = 'Underweight';
        document.getElementById('bmiStatus').style.color = 'orange';
    } else if (bmi >= 18.5 && bmi < 25) {
        status = 'Normal';
        document.getElementById('bmiStatus').style.color = 'green';
    } else if (bmi >= 25 && bmi < 30) {
        status = 'Overweight';
        document.getElementById('bmiStatus').style.color = 'red';
    } else { // bmi >= 30
        status = 'Obese';
        document.getElementById('bmiStatus').style.color = 'darkred';
    }
    document.getElementById('bmiStatus').textContent = status;
}