// PROBLEM : how do you print this 0,1,1,2,3,5,8,13 ? 

// solution without recursion ..................... !!

function fibboSeries(count){
    let a = -1,b = 1,curr = 1,series = [],c;

    while(curr <= count){
        c = a + b;
        series.push(c);
        curr++;
        a = b;
        b = c;
    }
    return series;
}
fibboSeries(8).join(',');                // output 0,1,1,2,3,5,8,13 : )

// solution with Recursion ......................!!


function fibboSeries(count,a,b,series){
    
    while(count > 0){
        series.push(a + b);
        return fibboSeries((count-1),b,a + b,series);
    }
    return series;
    
}
fibboSeries(8,-1,1,[]).join(',');               // output 0,1,1,2,3,5,8,13 : )