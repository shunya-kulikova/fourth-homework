let counter = 0;
while (true){
    let question = prompt ("continue or break?");
    if (question === "break"){
        break;
    }else if (question === "continue") {
    counter++;
    continue;
}
}
alert(counter);  

