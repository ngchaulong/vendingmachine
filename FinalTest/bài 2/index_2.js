function numberOneTriangle(num)
{
    if(num < 1 || num > 10)
    {
        console.log("nhap gia tri trong khoang 1 dem 10");
    }
    else{
        for(let i = 0; i < num; i++){
            for(let j = 0; j <= num; j++){
                if(j === 0 || j === i || i === num-1){
                 document.write("*");
                } else{
                  document.write(" ");
                }
            }
            document.write("</br>");
        }
    }
}
numberOneTriangle(3);