//Вариант 3
//Необходимо перевести ваши JS классы на TS. Все входные параметры и возвращаемые значения для методов должны иметь тип (отличный от any). Все свойства тоже должны иметь тип. Помимо этого необходимо, чтобы базовый класс был либо интерфейсом, либо абстрактным классом в зависимости от построения вашего наследования.

//Мой класс, великий магазин
abstract class Shop {
   public theNumberOfEmployees: Number  = 20;
   public durationOfWork: Number  = 10;
   public numberPhone: String;
   public name: String;
   public address: String;


   constructor(name: String, address: String, numberPhone: String, durationOfWork: Number){
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
   public rating: Number  = 5;
    
   sayRating(){
     console.log("Я, " + `${this.name}`+ ", " + "расположенная по адресу: " + `${this.address}` + ", " + "очень крутой магазин в Томске, потому что у меня рейтинг: " + `${this.rating}`);
   }
}

class Maria_ra extends Shop {
   public rating: Number = 2;
   
   sayRating(){
       console.log("Я, " + `${this.name}`+ ", " + "расположенная по адресу: " + `${this.address}` + ", " + "неудачник Томска, потому что у меня рейтинг: " + `${this.rating}` + ", " + "да и работаю так мало, всего: " + `${this.durationOfWork}` + " ч! :(");
     }
}

//объявление
//let shop = new Shop ("Пятерочка", "Корнилово", "8-800-555-35-55", 15);
//shop.greetVisitors();
//shop.showInfoAboutShop();
let lenta = new Lenta ("Лента", "Южка", "8-800-555-35-55", 10);
let mariaRa = new Maria_ra ("Мария-ра", "Иркутский 110А", "8-800-666-35-55", 5);
lenta.sayRating();
mariaRa.sayRating();
