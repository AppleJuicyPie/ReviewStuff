function change(){
    document.getElementById("ToTwo").innerHTML = "This is number 2";
}
function tableChange(){
    for(i=1;i<6;i++){
        for(j=1;j<6;j++){
            document.getElementById("coordinate").innerHTML = i+","+j;
        }
    }
}
