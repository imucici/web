// nav

function openNav() {
    document.getElementById("nav").style.width = "19%";
    document.getElementById("three_bar").style.display = 'none';
    document.getElementById("mask").style.display = 'flex';
    document.documentElement.style.overflowY = 'hidden'; 
}   



function closeNav() {
    document.getElementById("nav").style.width = "0%";
    document.getElementById("three_bar").style.display = 'flex';
    document.getElementById("mask").style.display = 'none';
    document.documentElement.style.overflowY = 'scroll'; 
}


// 當觸發遮罩時，偵測到點選頁面任一處時，解除遮罩
function nomask() {
    closeNav();
}


function openfun() {
    document.getElementById("hidden").style.display = 'flex';
    document.getElementById("open").style.display = 'none';
    document.getElementById("close").style.display = 'flex';
};

function closefun() {
    document.getElementById("hidden").style.display = 'none';
    document.getElementById("close").style.display = 'none';
    document.getElementById("open").style.display = 'flex';
};


function gocomment() {
    document.getElementById("cancle").style.display = 'flex';
    document.getElementById("addcomment").style.display = 'flex';
    document.getElementById("whole_mes").style.marginBottom = '0px';
};

function canclecomment() {
    document.getElementById("cancle").style.display = 'none';
    document.getElementById("addcomment").style.display = 'none';
    document.getElementById("whole_mes").style.marginBottom = '32px';
};




function goyoutube() {
    window.open('https://www.youtube.com/', '_blank');
};

function gocompany() {
    window.open('https://www.youtube.com/channel/UCMElSC5ghCiyNtbu6HLDVGQ', '_blank');
};



function searchhoverfun() {
    document.getElementById('search_hover').style.display = 'flex';

};

function searchhoverfunout() {
    document.getElementById('search_hover').style.display = "none";
};

function camerahoverfun() {
    document.getElementById('camera_hover').style.display = 'flex';
};

function camerahoverfunout() {
    document.getElementById('camera_hover').style.display = "none";
};


function squarehoverfun() {
    document.getElementById('square_hover').style.display = 'flex';
};

function squarehoverfunout() {
    document.getElementById('square_hover').style.display = "none";
};

function bellshoverfun() {
    document.getElementById('bells_hover').style.display = 'flex';
};

function bellshoverfunout() {
    document.getElementById('bells_hover').style.display = "none";
};


function logohoverfun() {
    document.getElementById('logo_hover').style.display = 'flex';
};

function logohoverfunout() {
    document.getElementById('logo_hover').style.display = "none";
};


function canclelikehoverfun() {
    document.getElementById('canclelike_hover').style.display = 'flex';
};

function canclelikehoverfunout() {
    document.getElementById('canclelike_hover').style.display = "none";
};


function dislikehoverfun() {
    document.getElementById('dislike_hover').style.display = 'flex';
};

function dislikehoverfunout() {
    document.getElementById('dislike_hover').style.display = "none";
};



function sharehoverfun() {
    document.getElementById('share_hover').style.display = 'flex';
};

function sharehoverfunout() {
    document.getElementById('share_hover').style.display = "none";
};





function savehoverfun() {
    document.getElementById('save_hover').style.display= 'flex';
};

function savehoverfunout() {
    document.getElementById('save_hover').style.display = "none";
};
