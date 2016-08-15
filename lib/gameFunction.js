var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Role;
(function (Role) {
    Role[Role["wolfman"] = 0] = "wolfman";
    Role[Role["villagers"] = 1] = "villagers";
    Role[Role["hunter"] = 2] = "hunter";
    Role[Role["witch"] = 3] = "witch";
})(Role || (Role = {}));
/**分配角色*/
var DistributionRoles = (function () {
    function DistributionRoles() {
    }
    DistributionRoles.prototype.DistributionRoles = function () {
        var n = Math.floor(Math.random() * 5) - 1;
        return Role[n];
    };
    return DistributionRoles;
}());
var WolfMan = (function (_super) {
    __extends(WolfMan, _super);
    function WolfMan() {
        _super.apply(this, arguments);
        this.roles = Role.wolfman;
        this.alive = 1;
    }
    return WolfMan;
}(DistributionRoles));
var Villagers = (function (_super) {
    __extends(Villagers, _super);
    function Villagers() {
        _super.apply(this, arguments);
        this.roles = Role.villagers;
        this.alive = 1;
    }
    return Villagers;
}(DistributionRoles));
var Hunter = (function (_super) {
    __extends(Hunter, _super);
    function Hunter() {
        _super.apply(this, arguments);
        this.roles = Role.hunter;
        this.alive = 1;
    }
    return Hunter;
}(DistributionRoles));
var Witch = (function (_super) {
    __extends(Witch, _super);
    function Witch() {
        _super.apply(this, arguments);
        this.roles = Role.witch;
        this.alive = 1;
        this.poison = 1;
        this.antidote = 1;
    }
    return Witch;
}(DistributionRoles));
/*天黑*/
var Night = (function () {
    function Night() {
        this.player = [];
        this.dead = [];
        this.live = this.player;
        this.wolfmans = [];
        this.villagers = [];
    }
    Night.prototype.add = function (item) {
        this.player.push(item);
    };
    Night.prototype.kill = function (index) {
        if (this.live.length > 1) {
            var i = this.live[index];
            this.dead.push(i);
            this.live.splice(index, 1);
        }
    };
    Night.prototype.save = function (index) {
        if (this.dead.length > 0) {
            var i = this.dead[index];
            this.live.push(i);
            this.dead.splice(index, 1);
        }
    };
    /*将狼人分为一组*/
    Night.prototype.addWolfMan = function () {
        for (var i = 0; i < this.player.length; i++) {
            if (this.player[i].roles === Role.wolfman) {
                this.wolfmans.push(this.player[i]);
            }
        }
    };
    /*将村民分为一组*/
    Night.prototype.addVillagers = function () {
        for (var i = 0; i < this.player.length; i++) {
            if (this.player[i].roles === (Role.villagers || Role.hunter || Role.witch)) {
                this.villagers.push(this.player[i]);
            }
        }
    };
    Night.prototype.wolfManKill = function (index) {
        document.write("请指定杀人目标!");
        this.kill(index);
    };
    Night.prototype.witch = function (item) {
        if (item.alive == 1) {
            document.write("是否使用解药?");
            if (true && item.poison == 1) {
                /*救一个被杀的人*/
                this.save(parseInt(prompt()));
                item.poison = 0;
            }
            document.write("是否使用毒药？");
            if (true && item.antidote == 1) {
                /*杀死一个人*/
                this.kill(parseInt(prompt()));
                item.antidote = 0;
            }
        }
    };
    return Night;
}());
/*天亮*/
var Day = (function () {
    function Day() {
        this.m = new Night();
        this.data = [];
    }
    Day.prototype.show = function (item) {
        document.write("昨晚被杀的是" + this.m.dead[this.m.dead.length]);
        if (item.roles === Role.hunter) {
            document.write("请选择要射杀的目标。");
            /*猎人选择目标*/
            this.m.kill(parseInt(prompt()));
            this.lastWords;
        }
        else {
            this.lastWords;
        }
    };
    /*遗言*/
    Day.prototype.lastWords = function () {
        document.write("请发表遗言");
        document.write(prompt());
    };
    /*玩家发言*/
    Day.prototype.speak = function () {
        for (var i = 0; i < this.m.player.length; i++) {
            document.write();
        }
    };
    /*计算票数最多的玩家*/
    Day.prototype.statistical = function (arr) {
        arr = arr || [];
        var count = 1;
        var yuansu = [];
        var sum = [];
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    count++;
                    arr.splice(j, 1);
                    j--;
                }
            }
            yuansu[i] = arr[i];
            sum[i] = count;
            count = 1;
        }
        var newsum = [];
        for (var item in sum) {
            newsum[item] = sum[item];
        }
        newsum.sort();
        var index = 0;
        var fcount = 1;
        for (var i = 0; i < sum.length; i++) {
            if (sum[i] == newsum[newsum.length - 1]) {
                index = yuansu[i];
                fcount++;
            }
        }
        if (fcount = 1) {
            return index;
        }
    };
    /*投票*/
    Day.prototype.vote = function () {
        for (var i = 0; i < this.m.live.length; i++) {
            this.data.push(document.write());
        }
        this.m.kill(this.statistical(this.data));
    };
    Day.prototype.wolfManAllEquals0 = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].alive != 0) {
                return false;
            }
        }
        return true;
    };
    Day.prototype.villagersAllEquals0 = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].alive != 0) {
                return false;
            }
        }
        return true;
    };
    Day.prototype.rule = function () {
        /*村民或狼人死光，游戏结束*/
        if (this.wolfManAllEquals0(this.m.wolfmans) && this.villagersAllEquals0(this.m.villagers) === true) {
            return "游戏结束！";
        }
    };
    return Day;
}());
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
        alert("等待其他玩家");
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
                } while (role !== Role.wolfman);
            }
            else if (w >= 1) {
                do {
                    role = seat.DistributionRoles();
                } while (role !== Role.witch);
            }
            else if (h >= 1) {
                do {
                    role = seat.DistributionRoles();
                } while (role !== Role.hunter);
            }
            else if (v >= 2) {
                do {
                    role = seat.DistributionRoles();
                } while (role !== Role.villagers);
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
//# sourceMappingURL=gameFunction.js.map