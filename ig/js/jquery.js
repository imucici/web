function openfun() {
    document.getElementById('hidden').style.display = 'flex';
    document.getElementById('open').style.display = 'none';
}

function openfun2() {
    document.getElementById('hidden2').style.display = 'flex';
    document.getElementById('open2').style.display = 'none';
}

function openfun3() {
    document.getElementById('hidden3').style.display = 'flex';
    document.getElementById('open3').style.display = 'none';
}


function searchfun() {
    document.getElementById('search_wrap').style.display = 'none';
    document.getElementById('search_wrap_hid').style.display = 'flex'
    document.getElementById('inp').style.display = 'flex';
    // 因為是使用切換div的視覺效果，所以需要再加上.focus自動於切換成input框後的同時將焦點帶到輸入框中
    document.getElementById('inp').focus();
}

// 偵測點擊頁面任一處時，跳出搜尋(onblur=)
function canclesearch() {
    document.getElementById('search_wrap').style.display = 'flex';
    document.getElementById('search_wrap_hid').style.display = 'none';
    document.getElementById('inp').style.display = 'none';
    // .value=''  清空input。.innerHTML=''清空畫面文字
    document.getElementById('inp').value = '';

}



function inputfun1() {
    document.getElementById('input_blue').style.color = '#0095f6';

    var x = document.getElementById('input').value;
    if (x.length == 0) {
        document.getElementById('input_blue').style.color = '#b4e0fc';
    }
}


function inputfun2() {
    document.getElementById('input_blue2').style.color = '#0095f6';

    var x = document.getElementById('input2').value;
    if (x.length == 0) {
        document.getElementById('input_blue2').style.color = '#b4e0fc';
    }
}

function inputfun3() {
    document.getElementById('input_blue3').style.color = '#0095f6';

    var x = document.getElementById('input3').value;
    if (x.length == 0) {
        document.getElementById('input_blue3').style.color = '#b4e0fc';
    }
}