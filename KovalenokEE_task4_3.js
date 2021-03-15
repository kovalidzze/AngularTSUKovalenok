function showArrayResult()
{
    let array = document.getElementById('array_input').value;
    console.log(array);
    if (array.length == 0)
    {
        alert ("Ошибка, введите значения массива");
    }
    else if (array.length < 7) //столько знаков с запятыми
    {
        alert ("Ошибка, введите больше четырех значений через запятую");
    }
    else {
    let realArray = array.split(',');
    console.log(realArray);
    let result = realArray.slice(0,4);
    console.log(result);
    let output = document.getElementById('array_output');
    output.innerText = result;
    //alert(result);
    }
    
}