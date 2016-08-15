
function getValue() {
    var url = document.location.search;
    var arr = url.split("=");
    return arr[1];
}

function join0() {
    if (document.getElementById("site1").innerText != getValue() && document.getElementById("site2").innerText != getValue() && document.getElementById("site3").innerText != getValue() && document.getElementById("site4").innerText != getValue() && document.getElementById("site5").innerText != getValue()) {
        var ui = document.getElementById("attend0");
        ui.style.display = "none";
        var site = document.getElementById("site0");
        var content = document.createTextNode(getValue());
        site.appendChild(content);
    }
    else {
        alert("你已加入游戏！");
    }
}


function join1() {
    if (document.getElementById("site0").innerText != getValue() && document.getElementById("site2").innerText != getValue() && document.getElementById("site3").innerText != getValue() && document.getElementById("site4").innerText != getValue() && document.getElementById("site5").innerText != getValue()) {
        var ui = document.getElementById("attend1");
        ui.style.display = "none";
        var site = document.getElementById("site1");
        var content = document.createTextNode(getValue());
        site.appendChild(content);
    }
    else {
        alert("你已加入游戏！");
    }
}

function join2() {
    if (document.getElementById("site0").innerText != getValue() && document.getElementById("site1").innerText != getValue() && document.getElementById("site3").innerText != getValue() && document.getElementById("site4").innerText != getValue() && document.getElementById("site5").innerText != getValue()) {
        var ui = document.getElementById("attend2");
        ui.style.display = "none";
        var site = document.getElementById("site2");
        var content = document.createTextNode(getValue());
        site.appendChild(content);
    }
    else {
        alert("你已加入游戏！");
    }
}

function join3() {
    if (document.getElementById("site0").innerText != getValue() && document.getElementById("site1").innerText != getValue() && document.getElementById("site2").innerText != getValue() && document.getElementById("site4").innerText != getValue() && document.getElementById("site5").innerText != getValue()) {
        var ui = document.getElementById("attend3");
        ui.style.display = "none";
        var site = document.getElementById("site3");
        var content = document.createTextNode(getValue());
        site.appendChild(content);
    }
    else {
        alert("你已加入游戏！");
    }
}

function join4() {
    if (document.getElementById("site0").innerText != getValue() && document.getElementById("site1").innerText != getValue() && document.getElementById("site2").innerText != getValue() && document.getElementById("site3").innerText != getValue() && document.getElementById("site5").innerText != getValue()) {
        var ui = document.getElementById("attend4");
        ui.style.display = "none";
        var site = document.getElementById("site4");
        var content = document.createTextNode(getValue());
        site.appendChild(content);
    }
    else {
        alert("你已加入游戏！");
    }
}

function join5() {
    if (document.getElementById("site0").innerText != getValue() && document.getElementById("site1").innerText != getValue() && document.getElementById("site2").innerText != getValue() && document.getElementById("site3").innerText != getValue() && document.getElementById("site4").innerText != getValue()) {
        var ui = document.getElementById("attend5");
        ui.style.display = "none";
        var site = document.getElementById("site5");
        var content = document.createTextNode(getValue());
        site.appendChild(content);
    }
    else {
        alert("你已加入游戏！");
    }
}

function gameStart() {
    if (document.getElementById("site0").innerText != "" && document.getElementById("site1").innerText != "" && document.getElementById("site2").innerText != "" && document.getElementById("site3").innerText != "" && document.getElementById("site4").innerText != "" && document.getElementById("site5").innerText != "") {
        game();

    }
    else {
        alert("等待其他玩家")
    }
}

function game() {
    var wolf = 0;
    var w = 0;
    var h = 0;
    var v = 0;
    for (var i = 0; i < 6; i++) {
        if (wolf < 2 || w < 1 || h < 1 || v < 2) {
            var seat = new DistributionRoles;
            var role;
            if (wolf >= 2) {
                do {
                    role = seat.DistributionRoles();
                } while (role !== Role.wolfman)
            }
            else if (w >= 1) {
                do {
                    role = seat.DistributionRoles();
                } while (role !== Role.witch)
            }
            else if (h >= 1) {
                do {
                    role = seat.DistributionRoles();
                } while (role !== Role.hunter)
            }
            else if (v >= 2) {
                do {
                    role = seat.DistributionRoles();
                } while (role !== Role.villagers)
            }
            else {
                role = seat.DistributionRoles();
            }

            if (role === Role.wolfman && wolf < 2) {
                document.getElementById("identity" + i).appendChild(document.createTextNode(role));
                wolf++;
            }
            else if (role === Role.witch && w < 1) {
                document.getElementById("identity" + i).appendChild(document.createTextNode(role));
                w++;
            }
            else if (role === Role.hunter && h < 1) {
                document.getElementById("identity" + i).appendChild(document.createTextNode(role));
                h++;
            }
            else if (role === Role.villagers && v < 2) {
                document.getElementById("identity" + i).appendChild(document.createTextNode(role));
                v++;
            }
        }
    }
}


