// 加奶泡
function add_forth() {
    document.getElementById('afterfroth').style.display = 'flex';
    document.getElementById('beforefroth').style.display = 'none';

}

// 去掉奶泡
function delete_forth() {
    document.getElementById('afterfroth').style.display = 'none';
    document.getElementById('beforefroth').style.display = 'flex';

}

// 有選擇是否加奶泡後顯示下一個步驟連結
function pick_froth() {
    document.getElementById('first_next').style.display='flex';
}

// 跳至第二步
function first_nextfun() {
    document.getElementById('first_next').style.display = 'none';
    window.location.hash = "#second";
}



////////////////////////////////////////////////////////////////////////////////////////

// ***2

// 開始滴巧克力
function add_chocolate() {
    document.getElementById("drop").style.visibility = "visible";
    document.getElementById('chocolatecup').src = 'images/chocolate1.png';
    change();
}


// function change() {
//     var img = document.getElementsByTagName('img')[0];
//     console.log(img);
//     var arr = ['images/chocolate0.png','images/chocolate1.png', 'images/chocolate2.png', 'images/chocolate3.png'];
//     // console.log(arr);

//     var n = 0;
//     function count() {


//         n++;
//         if (n == arr.length) {
//             n = 3;
//             document.getElementById("drop").style.visibility = "hidden";
            
//         }
//         console.log(n);
//         img.src = arr[n];
//     }
//     setInterval(count, 3000);
// }


// 加不同量巧克力
function change() {
    var img = document.getElementById('chocolatecup')
    var arr = ['images/chocolate1.png', 'images/chocolate2.png', 'images/chocolate3.png'];

    var n = 0;
    function count() {

        if (n<2) {
            n++;
            console.log(n);
            img.src = arr[n];
        }

        else {
            n=2;
            document.getElementById("drop").style.visibility = "hidden";

            // 裝完顯示下一個步驟連結
            console.log(n);
            document.getElementById('second_next').style.display = 'flex';

            // 因為setInterval會無限執行，所以要用clearInterval強制中止，(setInterval的名字)
            clearInterval(count_add);
            
        }
        
    }
    var count_add = setInterval(count, 3000);

}


// 跳至第三步
function second_nextfun() {
    window.location.hash = "#third";
    document.getElementById('second_next').style.display = 'none';
}


///////////////////////////////////////////////////////////////////////////////////////



function getrange() {
    var d = document.getElementById('acid_range').value;
    console.log(d);

    if (d >= 55) {
        document.getElementById('degree1').style.color = 'grey';
        document.getElementById('degree2').style.color = 'black';

        document.getElementById('third_next').style.display = 'flex';
    }
    else if (d < 50) {
        document.getElementById('degree2').style.color = 'grey';
        document.getElementById('degree1').style.color = 'black';

        document.getElementById('third_next').style.display = 'flex';
    }

    else if (d >= 50 && d < 55) {
        document.getElementById('degree2').style.color = 'grey';
        document.getElementById('degree1').style.color = 'grey';

        document.getElementById('third_next').style.display = 'flex';
    }
}


// 跳至第四步
function third_nextfun() {
    window.location.hash = "#forth";
    document.getElementById('third_next').style.display = 'none';
}

//////////////////////////////////////////////////////////////////////////////////


// 調整奶量
var clicks = 0; 
function check() {
    // alert('0');
    if (clicks %3 == 1) {
        console.log(clicks);
        document.getElementById("scale_ball").style.transform = "rotate(45deg)";
        document.getElementById('milkcup').src = 'images/milk2.png';

        document.getElementById('forth_next').style.display = 'flex';

    } else if (clicks % 3 == 2) {
        console.log(clicks);
        document.getElementById("scale_ball").style.transform = "rotate(90deg)";
        document.getElementById('milkcup').src = 'images/milk3.png';

        document.getElementById('forth_next').style.display = 'flex';
    }

    else if (clicks %3 == 0) {
        console.log('3');
        document.getElementById("scale_ball").style.transform = "rotate(0deg)";
        document.getElementById('milkcup').src = 'images/milk1.png';
        console.log(clicks);

        document.getElementById('forth_next').style.display = 'flex';
    }
} 




// 跳至第五步
function forth_nextfun() {
    window.location.hash = "#fifth";
    document.getElementById('forth_next').style.display = 'none';
}











////////////////////////////////////////////////////////////////////////////////////



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    // 可拖動datatype是text(ID)的元素為coffeebean的物件
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    ev.target.appendChild(document.getElementById(data));

    // wavefun();
    document.getElementById('microwave').src = 'images/microwave2.png';
    document.getElementById('button').style.display = 'flex';
}

function wavefun() {
    var tt = document.styleSheets[0];
    var index = styleSheets.length;
    //tt.deleteRule(6);//清除之前写入的动画样式
    console.log(tt);
    tt.insertRule("#microwave @keyframes wave { 0% { transform: translateX(20px); } 50% { transform: translateX(0px); } 100% { transform: translateX(-20px); } }", index);//写入样式

}













// 調微波爐刻度
var clicks = 0;
function turn() {
    // alert('0');
    if (clicks % 3 == 1) {
        document.getElementById("button").style.transform = "rotate(0deg)";
      
    } else if (clicks % 3 == 2) {
        document.getElementById("button").style.transform = "rotate(55deg)";
    }

    else if (clicks % 3 == 0) {
        console.log('3');
        document.getElementById("button").style.transform = "rotate(-50deg)";
    }
} 
// 調微波爐刻度