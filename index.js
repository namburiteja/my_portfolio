function nec(){
    document.getElementById("nec").innerHTML = "narasarao peta engineering college";
}
function cen(){
    document.getElementById("nec").innerHTML = "#####";
}
function nam(){
    document.querySelector(".namm").innerHTML = "నమస్కారం అండి🙏"
}
function man(){
    document.querySelector(".namm").innerHTML = "HELLO!"
}
var h = document.getElementById("home");
var w = document.getElementById("work");
var r = document.getElementById("resume"); 
var m = document.getElementById("me");
var c = document.getElementById("contactme");
w.style.display="none";
r.style.display="none";
m.style.display="none";
c.style.display="none";
pp = document.getElementById("ree")
pp.style.display="none";

document.getElementById("res").addEventListener("click",function() {
    if(pp.style.display == "none"){
        pp.style.display = "block"
    }
    else{
        pp.style.display = "none"
    }
});

document.getElementById("one").addEventListener("click",function(){
    h.style.display="block";
    w.style.display="none";
    r.style.display="none";
    m.style.display="none";
    c.style.display="none";

});
document.getElementById("two").addEventListener("click",function(){
    h.style.display="none";
    w.style.display="block";
    r.style.display="none";
    m.style.display="none";
    c.style.display="none";

});

document.getElementById("four").addEventListener("click",function(){
    h.style.display="none";
    w.style.display="none";
    r.style.display="block";
    m.style.display="none";
    c.style.display="none";

});
document.getElementById("five").addEventListener("click",function(){
    h.style.display="none";
    w.style.display="none";
    r.style.display="none";
    m.style.display="block";
    c.style.display="none";

});
document.getElementById("six").addEventListener("click",function(){
    h.style.display="none";
    w.style.display="none";
    r.style.display="none";
    m.style.display="none";
    c.style.display="block";

});
function bord(){
    document.querySelector(".ssc").style.border="4px solid rgb(156, 69, 69)"
};
function drob(){
    document.querySelector(".ssc").style.border="2px solid rgb(69, 69, 69)"
};
function borde(){
    document.querySelector(".inter").style.border="4px solid rgb(156, 69, 69)"
};
function edrob(){
    document.querySelector(".inter").style.border="2px solid rgb(69, 69, 69)"
};
function border(){
    document.querySelector(".btech").style.border="4px solid rgb(156, 69, 69)"
};
function redrob(){
    document.querySelector(".btech").style.border="2px solid rgb(69, 69, 69)"
};
function sama(){
    document.querySelector(".kl").innerHTML = "సామాజిక ప్రసార ఖాతాలు✨";
};
function amas(){
    document.querySelector(".kl").innerHTML = "online platforms"
}
