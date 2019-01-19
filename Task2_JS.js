//1.1(1)
obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
console.log(obj.js);

//1.1(2)
obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
var key = 'js';
console.log(obj[key]);



//1.2
var arr = {
  'ru':['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Cуббота', 'Воскресенье'],
  'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(arr['ru'][0]);
console.log(arr['en'][2]);

var lang = 'ru';
var day = 3;
console.log(arr[lang][day-1]);



// 1.3(1)
var day = 31;
var decade = 0;
if (day>31 || day<1) {
  decade = 'несуществующий день';
} else if (day<11) {
  decade = 1;
}else if (day<21) {
  decade = 2;
} else {
  decade = 3;
};

// 1.3(2)
var day = 31;
if (day>31 || day<1) {
  console.log('несуществующий день');
} else
{ if (day === 31)
{ day=30 }
var decade = Math.ceil(day/10);
console.log('день попадает в ' + decade + ' декаду');
}




// 1.4(1)
var a = '123';
var sum = Number(a[0])+Number(a[1])+Number(a[2]);
console.log('сумма равна ' + sum);

// 1.4(2)
var str = "123";
var sum = 0;
for (i=0; i<str.length; i++){
  sum+=Number(str[i]);
};
console.log('сумма равна ' + sum);




// 1.5
var obj = {Коля: '200', Вася: '300', Петя: '400'};
for (var key in obj) {
  console.log(key + " - зарплата " + obj[key] + " долларов");
}



// 1.6(1)
var x=5;
var factorial=1;
for (i=2; i<=x; i++){
  factorial = factorial*i;
};
console.log('факториал равен ' + factorial);

// 1.6(2)
var x=5;
var factorial=1;
var i = 2;
while (i<=x){
  factorial = factorial*i;
  i++;
};
console.log('факториал равен ' + factorial);




// 1.7
var x = 'qwerty.html';
var y = '.html';
var z = x.lastIndexOf(y);
if (z===x.length-y.length) {
  a=true;
} else {
  a=false;
}
console.log(a);



// 1.8(1)
var number = 5;
function convertToDay (number) {
  var a;
  switch (number) {
    case 1:
      a = 'Monday';
      break;
    case 2:
      a = 'Tuesday';
      break;
    case 3:
      a = 'Wednesday';
      break;
    case 4:
      a = 'Thursday';
      break;
    case 5:
      a = 'Friday';
      break;
    case 6:
      a = 'Saturday';
      break;
    case 7:
      a = 'Sunday';
      break;
    default:
      alert( 'Incorrect number' );
  }
  return (a);
}
var day = convertToDay(number);
console.log(day);


// 1.8(2)
var number=3;
function convertToDay(dayIndex) {
  return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][dayIndex-1];
}
var day = convertToDay(number);
console.log(day);





// 1.9
var x = false;
var arr=[1,2,5,8,4,6,2,8,7,9,6,6];
for (i=0;i<arr.length-1;i++) {
  if (arr[i]===arr[i+1]) {
    x=true;
  }
}
console.log(x);



// 1.10(1)
var arr = [1, -1, 2, -2, 81];
var sqrtPositiveArr=[];
var j=0;
for (i=0;i<arr.length; i++) {
  if (arr[i]>0) {
    sqrtPositiveArr[j]=Math.sqrt(arr[i]);
    j++;
  }
}
arr=sqrtPositiveArr;
console.log(arr);


// 1.10(2)
var arr = [1, -1, 2, -2, 81];
arr = arr.filter(function(number) {
  return number > 0;
});
for (i=0;i<arr.length; i++) {
arr[i]=Math.sqrt(arr[i]);
}
console.log(arr);


//1.10(3)
var arr = [1, -1, 2, -2, 81];
arr = arr.filter(function(number) {
  return number > 0;
}).map( function(number) {
  return Math.sqrt(number);
});
console.log(arr);


// 1.10(4)
var arr = [1, -1, 2, -2, 81];
var sqrtPositiveArr=[];
var j=0;
for (i=0;i<arr.length; i++) {
  if (arr[i]>0) {
    sqrtPositiveArr.push(Math.sqrt(arr[i]));
    j++;
  }
}
arr=sqrtPositiveArr;
console.log(arr);





// 2.1.
function distinctValues(s) {
  var marker=true;
  var q = 0;

  for (i=0; i<s.length; i++) {
    for (j=i+1; j<s.length; j++) {
      if (s[i]===s[j]) {
        marker = false;
      }
    }
    if (marker) {
      q++;
    }
    marker = true;
  }
  return (q);
}

var string1='qwerty';
var string2='qwertyty';
var string3='qwertytyui';
var quantity1 = distinctValues(string1);
var quantity2 = distinctValues(string2);
var quantity3 = distinctValues(string3);
console.log(quantity1);
console.log(quantity2);
console.log(quantity3);





// 2.2.
var Date = new Date();

function convertToDay(dayIndex) {
  return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][dayIndex-1];
};
var weekDay=Date.getDay();
var day = convertToDay(weekDay);

var hours = Date.getHours();
var timeOfDays;
if (hours>12) {
  hours-=12;
  timeOfDays = ' PM : ';
} else {
  timeOfDays = ' AM : ';
}

console.log('Today is : ' + day + '.');
console.log(hours + timeOfDays + Date.getMinutes() + ' : ' + Date.getSeconds() );




// 2.3.
function checkPoly(s) {
  var marker = true;
  for (i=0; i<s.length/2; i++) {
    if (s[i]!==s[s.length-1-i]) {
      marker = false;
    }
  }
  return (marker);
}

var string1 = 'qwertytrewq';
var string2 = 'qwertyytrewq';
var string3 = 'qwertyytreq';
console.log(checkPoly(string1));
console.log(checkPoly(string2));
console.log(checkPoly(string3));



// 2.4.
function showObj(o) {
  for (var key in o) {
    console.log("key - id => " + key + ' - ' + o[key]);
  }
}

var obj = {key1: '111', key2: '222', key3: '333'};
showObj(obj);




// 2.5.
function formatText(string) {
  var arr = Array.from(string);
  arr[0]= arr[0].toUpperCase();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i-1] == '.' || arr[i-1] == '!' || arr[i-1] == '?' ) {
      if (arr[i] == ' ') {
        arr[i]= arr[i];
        arr[i+1]= arr[i+1].toUpperCase();
      } else {
        arr[i]= arr[i].toUpperCase();
      }
    } else {
      arr[i]= arr[i];
    }
  }
  var newStr = arr.join('');
  console.log(newStr);
}

var string = 'cегодня вы не услышите речь мистера Томпсона. его время прошло.многие годы вы задавались вопросом - Кто же такой Джон Галт?в отчаянии вы задавали этот вопрос, когда закрывались фабрики, товары становились дефицитом, а безработица лишь возрастала.ваша жизнь становится все тяжелее - будто бы мир теряет свои жизненные силы.вы задавались этим вопросом, но рассчитывали получить ответ.но я могу на него ответит. Потому что Джон Галт - это я. мистер Томпсон не расскажет вам правду про мировой кризис. но я расскажу.';
formatText(string);






// 2.6.
function range(a,b) {
  if (a>b) {
    var temp=a;
    a=b;
    b=temp;
  }
  var arr=[];
  for (i=0; i<=b-a; i++) {
    arr[i]=i+a;
  }
  return (arr);
}

var x=-9;
var y=2;
var zArr = range(x,y);
console.log(zArr);


// 2.7.
function weirdCopy (obj) {
  var copyObj = new Number();
  for (var key in obj) {
    copyObj[obj[key]] = key;
  }
  return copyObj;
}

var object = {Коля: '200', Вася: '300', Петя: '400'};
var copyObject = weirdCopy(object)
console.log(object);
console.log(copyObject);



// 2.8
function getDublicate(arr) {
  var duplicateArr =[];
  var marker;
  for (i=0; i<arr.length; i++) {
    for (j=0; j<arr.length; j++) {
      if (i!==j) {
        if(arr[i].sum === arr[j].sum && arr[i].type === arr[j].type && Math.abs((new Date(arr[i].date).getTime())-(new Date(arr[j].date).getTime()))<30000) {
          duplicateArr.push(arr[i]);
          break;
        }
      }
    }
  }
  return duplicateArr;
}


var array =
    [
      {
        id: 122344,
        sum: 400,
        type: 'food',
        date: 'Fri Jan 11 2019 11:01:13'
      },
      {
        id: 122345,
        sum: 200,
        type: 'food',
        date: 'Fri Jan 11 2019 11:01:44'
      },
      {
        id: 122346,
        sum: 400,
        type: 'food',
        date: 'Fri Jan 11 2019 11:01:44'
      },
      {
        id: 122347,
        sum: 900,
        type: 'clothes',
        date: 'Fri Jan 11 2019 11:01:44'
      },
      {
        id: 122348,
        sum: 400,
        type: 'food',
        date: 'Fri Jan 11 2019 11:01:44'
      },
      {
        id: 122349,
        sum: 900,
        type: 'food',
        date: 'Fri Jan 11 2019 11:01:44'
      },
    ]

console.log(getDublicate (array));


