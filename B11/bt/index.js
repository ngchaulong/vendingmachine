function vendingMachine(numberofproduct){
    switch(numberofproduct)
    {
        case 1: console.log("Pepsi");
       return 2;
        case 2: console.log("Cocacola");
       return 3;
        case 3: console.log("NutiBoost");
       return 3;
        case 4: console.log("revice");
       return 1;
        case 5: console.log("DR Thanh");
       return 3;
        case 6: console.log("Khong Do");
       return 4;
        default:
            return ;
    }
    
}
let total = +prompt ("Please enter money:");
if (isNaN(total)){
    console.log("Nhập lại");
}
else if (!isNaN(total) && total > 0 && parseInt (total)===total) {
    while (total>0)
    {
        let num = +prompt ("Please number of drink:");
        let price = vendingMachine(num);
        if (total<price) {
            console.log("Bạn không đủ tiền");
            break;
        }
        else {
            console.log("Bạn đã mua nước");
        }
    }
} 