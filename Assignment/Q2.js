let Day=8;
let week=((Day-1)%7)+1;
switch(week){
    case 1:
       console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
           console.log("Tuesday");
            break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
            console.log("Saturday");
        break;
    default:
         console.log('invalid');
}