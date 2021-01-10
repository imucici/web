if (window.location.hash !== "") {
    window.location.hash = "";
}

function goto_milkbob() {
    document.getElementById('cover').style.opacity = 0;
    setTimeout(function(){window.location.hash = "#first";}, 1500);
    setTimeout(function(){document.getElementById('first').style.opacity = 1;}, 2000);
}

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
    document.getElementById('first').style.opacity=0;
    if (document.getElementById('afterfroth').style.display == 'flex' && document.getElementById('beforefroth').style.display == 'none') {
        setTimeout(function(){window.location.hash = "#second";}, 1500);
        setTimeout(function(){document.getElementById('second').style.opacity=1;}, 2500);
    }
    else if (document.getElementById('afterfroth').style.display == 'none' && document.getElementById('beforefroth').style.display == 'flex') {
        setTimeout(function(){window.location.hash = "#one";}, 1500);
        setTimeout(function(){document.getElementById('one').style.opacity=1;}, 2000);
    }
}

////////////////////////////////////////////////////////////////////////////////////////


// 加水
function addwater() {
    document.getElementById('waterdrop').style.visibility = 'visible';
    document.getElementById('nowater').style.display = 'none';
    document.getElementById('tastecup').style.display = 'none';
    document.getElementById('initialwater').style.display = 'none';
}

function showfra() {
    document.getElementById('fragrance1').style.display = 'flex';
    document.getElementById('fragrance2').style.display = 'flex';
    
}

function nowater() {
    document.getElementById('tastecup').style.display = 'none';
    document.getElementById('one_next').style.display = 'flex';
}

function one_nextfun() {
    document.getElementById('one_next').style.display = 'none';
    document.getElementById('one').style.opacity=0;
    if (document.getElementById('tastecup').style.display == 'none') {
        setTimeout(function(){window.location.href='espresso.html';}, 1500);
    }
}

function goto_sour() {
    document.getElementById('one').style.opacity=0;
    setTimeout(function(){window.location.hash='#forth';}, 1500);
    setTimeout(function(){document.getElementById('forth').style.opacity=1;}, 2500);

}

function goto_bitter() {
    document.getElementById('one').style.opacity=0;
    setTimeout(function(){window.location.hash='#fifth';}, 1500);
    setTimeout(function(){document.getElementById('fifth').style.opacity=1;}, 2500);

}

// 開始滴巧克力
function add_chocolate() {
    document.getElementById("nochocolatebtn").style.visibility = "hidden";
    document.getElementById("drop").style.visibility = "visible";
    document.getElementById('chocolatecup').src = 'images/chocolate1.png';
    // 這邊圖片要換成擠壓瓶
    document.getElementById('chocolate_bottle').src = 'images/chocolatebottle2.png';
    document.getElementById('chocolate_bottle').style.left = '4px';
    // 這邊圖片要換成擠壓瓶
    change();
}

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
            secondnextvisibility();
            // 因為setInterval會無限執行，所以要用clearInterval強制中止，(setInterval的名字)
            clearInterval(count_add);
        }
    }
    var count_add = setInterval(count, 3000);
}

function secondnextvisibility() {
    document.getElementById('second_next').style.display = 'flex';
}

// 跳至第三步
function second_nextfun() {
    document.getElementById('second_next').style.display = 'none';
    document.getElementById('second').style.opacity = 0;
    if (document.getElementById('chocolate_bottle').style.left == '4px') {
        setTimeout(function(){window.location.href='mocha.html';}, 1500);
    }
    else {
        setTimeout(function(){window.location.hash = "#third";}, 1500);
        setTimeout(function(){document.getElementById('third').style.opacity = 1;}, 2000);
    }
}

///////////////////////////////////////////////////////////////////////////////////////

function getrange() {
    var d = document.getElementById('acid_range').value;
    console.log(d);
    if (d >= 55) {
        document.getElementById('degree1').style.color = 'grey';
        document.getElementById('degree2').style.color = 'black';
        document.getElementById('forth_next').style.display = 'flex';
    }
    else if (d < 50) {
        document.getElementById('degree2').style.color = 'grey';
        document.getElementById('degree1').style.color = 'black';
        document.getElementById('forth_next').style.display = 'flex';
    }
    else if (d >= 50 && d < 55) {
        document.getElementById('degree2').style.color = 'grey';
        document.getElementById('degree1').style.color = 'grey';
        document.getElementById('forth_next').style.display = 'none';
    }
}

// 跳至第四步
function forth_nextfun() {
    document.getElementById('forth_next').style.display = 'none';
    document.getElementById('forth').style.opacity=0;
    if (document.getElementById('degree1').style.color == 'grey' && document.getElementById('degree2').style.color == 'black') {
        setTimeout(function(){window.location.href='ethiopia.html';}, 1500);
    }
    else if (document.getElementById('degree1').style.color == 'black' && document.getElementById('degree2').style.color == 'grey') {
        setTimeout(function(){window.location.href='nicaragua.html';}, 1500);
    }
}

//////////////////////////////////////////////////////////////////////////////////

function openfridge() {
    document.getElementById('trashcan').src = 'images/fridge1.png';
}

function closefridge() {
    document.getElementById('trashcan').src = 'images/fridge0.png';
}

function allowDrop_milk(ev) {
    ev.preventDefault();
}

function drag_milk(ev) {
    // 可拖動datatype是text(ID)的元素為coffeebean的物件
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop_milk(ev) {
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    ev.target.appendChild(document.getElementById(data));
    document.getElementById('third_next').style.display = 'flex';
    document.getElementById('milkcup').src = 'images/nomilk.png';
    document.getElementById('scale_pic').style.display = 'none';
    document.getElementById('scale_ball').style.display = 'none';
    document.getElementById('trashcan').src = 'images/fridge2.png';
}

// 調整奶量
var clicks = 0; 
function check() {
    document.getElementById('milk').style.display = 'none';
    document.getElementById('trashcan').style.display = 'none';
    if (clicks %3 == 1) {
        console.log(clicks);
        document.getElementById("scale_ball").style.transform = "rotate(45deg)";
        document.getElementById('milkcup').src = 'images/milk2.png';
        document.getElementById('third_next').style.display = 'flex';
    } 
    else if (clicks % 3 == 2) {
        console.log(clicks);
        document.getElementById("scale_ball").style.transform = "rotate(90deg)";
        document.getElementById('milkcup').src = 'images/milk3.png';

        document.getElementById('third_next').style.display = 'flex';
    }
    else if (clicks %3 == 0) {
        console.log('3');
        document.getElementById("scale_ball").style.transform = "rotate(0deg)";
        document.getElementById('milkcup').src = 'images/milk1.png';
        console.log(clicks);

        document.getElementById('third_next').style.display = 'none';
    }
} 

function third_nextfun() {
    document.getElementById('third_next').style.display = 'none';
    document.getElementById('third').style.opacity=0;
    if (clicks % 3 == 1) {
        setTimeout(function(){window.location.href='cappuccino.html';}, 1500);
    }
    else if (clicks % 3 == 2) {
        setTimeout(function(){window.location.href='latte.html';}, 1500);
    }
    else if (document.getElementById('scale_pic').style.display == 'none') {
        setTimeout(function(){window.location.href='macchiato.html';}, 1500);
    }
}

////////////////////////////////////////////////////////////////////////////////////

function allowDrop(ev) {
    console.log('ev');
    console.log(ev);
    ev.preventDefault();
}

function drag(ev) {
    // 可拖動datatype是text(ID)的元素為coffeebean的物件
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    // ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    ev.target.appendChild(document.getElementById(data));

    // wavefun();
    document.getElementById('microwave').src = 'images/microwave2.png';
    document.getElementById('button').style.display = 'flex';
    document.getElementById('extrabtn').style.display = 'flex';
    document.getElementById('magnifier').style.display = 'flex';
    document.getElementById('arrow').style.display = 'none';
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
        document.getElementById("extrabtn").style.transform = "rotate(-1deg)";
        document.getElementById('fifth_next').style.display = 'flex';
    } 
    else if (clicks % 3 == 2) {
        document.getElementById("button").style.transform = "rotate(55deg)";
        document.getElementById("extrabtn").style.transform = "rotate(55deg)";
        document.getElementById('fifth_next').style.display = 'flex';
    }
    else if (clicks % 3 == 0) {
        console.log('3');
        document.getElementById("button").style.transform = "rotate(-50deg)";
        document.getElementById("extrabtn").style.transform = "rotate(-60deg)";
        document.getElementById('fifth_next').style.display = 'none';
    }
}

function fifth_nextfun() {
    document.getElementById('fifth_next').style.display = 'none';
    document.getElementById('fifth').style.opacity=0;
    if (clicks % 3 == 1) {
        setTimeout(function(){window.location.href='columbia.html';}, 1500);
    }
    else if (clicks % 3 == 2) {
        setTimeout(function(){window.location.href='mandheling.html';}, 1500);
    }
}

function goto_index() {
    window.location.href='index.html';
}