//Вариант 3
//Релизуйте класс с использованием JavaScript Магазин с двумя свойствами (на ваш выбор) и двумя методами и двух его наследников у которых будет как минимум один дополнительный метод и свойство

//Мой класс, великий магазин
class Shop {
    theNumberOfEmployees = 20;
    durationOfWork = 10;
 
    constructor(name, address, numberPhone, durationOfWork){
       this.name = name;
       this.address = address;
       this.numberPhone = numberPhone;
       this.durationOfWork = durationOfWork;
    }

    showInfoAboutShop(){
        console.log ("Название магазина: " + this.name + ", Адрес: " + this.address + ", Телефон: " + this.numberPhone + ", Работает в течение: " + this.durationOfWork + "часов, Работает вот столько сотрудников: " + this.theNumberOfEmployees);
    }

    greetVisitors(){
       console.log ("Вас привествует магазин: " + this.name + "! " + "Мы работаем: "+ this.durationOfWork + " часов. "+ "Приятных покупок!");
    } 

}
 //Наследники мои

 class Lenta extends Shop {
    rating = 5;
     
    sayRating(){
      console.log("Я, " + `${this.name}`+ ", " + "расположенная по адресу: " + `${this.address}` + ", " + "очень крутой магазин в Томске, потому что у меня рейтинг: " + `${this.rating}`);
    }
 }
 
 class Maria_ra extends Shop {
    rating = 2;
    
    sayRating(){
        console.log("Я, " + `${this.name}`+ ", " + "расположенная по адресу: " + `${this.address}` + ", " + "неудачник Томска, потому что у меня рейтинг: " + `${this.rating}` + ", " + "да и работаю так мало, всего: " + `${this.rating}` + " ч! :(");
      }
 }
 
 //объявление
 let shop = new Shop ("Пятерочка", "Корнилово", "8-800-555-35-55", 15);
 shop.greetVisitors();
 shop.showInfoAboutShop();
 let lenta = new Lenta ("Лента", "Южка", "8-800-555-35-55", 10);
 let mariaRa = new Maria_ra ("Мария-ра", "Иркутский 110А", "8-800-666-35-55", 5);
 lenta.sayRating();
 mariaRa.sayRating();
 