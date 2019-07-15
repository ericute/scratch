// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(today, limit) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    //console.log(table);
    
    let incorrectlyMarkedRows = 0;
    let oneDay = 1000*60*60*24;
    
    let table = document.getElementsByTagName('table')[0];
    let rows = table.rows;
    
    for (let i = 0; i < rows.length; i++) {
        //console.log(rows[i].cells);
        //console.log(rows[i].style.backgroundColor);
        let bgColor = rows[i].style.backgroundColor;
        
        let columns = rows[i].cells;
        /*for (let j = 0; j < columns.length; j++) {
            //console.log(columns[j].innerHTML);
            let val = columns[j].innerHTML;
            if (Date.parse(val)) {
                console.log(val);
            }
        }*/
        let name = columns[0].innerHTML;
        let borrowDate = columns[1].innerHTML;
        let returnDate = columns[2].innerHTML;
        
        //console.log('today: ' + today);
        //console.log('borrowDate: ' + borrowDate);
        //console.log('returnDate: ' + returnDate);
        
        if (returnDate == '') {
            let todayDt = new Date(today).getTime();
            let borrowDateDt = new Date(borrowDate).getTime();
            let diff = (todayDt - borrowDateDt) / oneDay;
            if (diff > limit) {
                if (bgColor != 'red') incorrectlyMarkedRows++;
            } else {
                if (bgColor == 'red') incorrectlyMarkedRows++;
            }
        } else {
            let returnDateDt = new Date(returnDate).getTime();
            let borrowDateDt = new Date(borrowDate).getTime();
            let diff = (returnDateDt - borrowDateDt) / oneDay;
            
            console.log('name: ' + name);
            console.log('color: ' + bgColor);
            console.log('greater than limit?: ' + (diff > limit));
            
            if (diff > limit) {
                if (bgColor != 'red') incorrectlyMarkedRows++;
            } else {
                if (bgColor == 'red') incorrectlyMarkedRows++;
            }
            
        }
        
    }
    
    return incorrectlyMarkedRows;
    
}

