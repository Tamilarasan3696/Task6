class uberprice{
    constructor(Km,Rate,Time){
        this.Km=+Km;
        this.Rate=+Rate;
        this.Time=+Time;
    }
    getprice(){
    
    let price=parseInt((this.Rate*this.Km)+(2*this.Time))
    return price;
    }
}
let Price = new uberprice(3,120,20)
console.log(Price.getprice())