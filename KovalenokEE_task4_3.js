function showArrayResult()
{
    let array = document.getElementById('array_input').value;
    let i = document.getElementById('i_input').value;
    console.log(array);
    let realArray = array.split(',');
    console.log(realArray.length);
    console.log(realArray);
    if (realArray.length == 0)
    {
        alert ("Ошибка, введите значения массива");
    }
    else if (realArray.length < 4) 
    {
        alert ("Ошибка, введите больше значений через запятую, не менее четырех");
    }
    else {
        if (i < 4 || i > realArray.length )
        {
            alert ("Ошибка, введите число не меньше 3 и не больше длины массива");
        }
        else {
    let result = realArray.slice(0,i);
    console.log(result);
    let output = document.getElementById('array_output');
    output.innerText = result;
    //alert(result);
    }
}
    
}