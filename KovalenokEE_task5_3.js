//Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
//const data = { a: 1, b: 2 };
//const data2 = { c: 1, b: 2 };
//console.log(intersection(data, data2)); // { b: 2 }
const data1 = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
const intersection = (object1, object2) => 
{
    const keyObj1 = [];
    for (let key in object1)
      {
        keyObj1.push(key);
      }
    //console.log(keyObj1);

    const result = keyObj1.reduce((intersect = {}, key) => 
    {
      if (object1[key] === object2[key]) 
      {
        intersect = 
        {
          ...intersect,
          [key]: object1[key],
        };
      }
      return intersect;
    }, 
    {});
    return result;
  };

console.log(intersection(data1, data2));
