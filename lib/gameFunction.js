var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Roles;
(function (Roles) {
    Roles[Roles["wolfman"] = 0] = "wolfman";
    Roles[Roles["villagers"] = 1] = "villagers";
    Roles[Roles["hunter"] = 2] = "hunter";
    Roles[Roles["witch"] = 3] = "witch";
})(Roles || (Roles = {}));
/*分配角色*/
var DistributionRoles = (function () {
    function DistributionRoles() {
    }
    return DistributionRoles;
}());
var WolfMan = (function (_super) {
    __extends(WolfMan, _super);
    function WolfMan() {
        _super.apply(this, arguments);
        this.roles = Roles.wolfman;
        this.alive = 1;
    }
    return WolfMan;
}(DistributionRoles));
var Villagers = (function (_super) {
    __extends(Villagers, _super);
    function Villagers() {
        _super.apply(this, arguments);
        this.roles = Roles.villagers;
        this.alive = 1;
    }
    return Villagers;
}(DistributionRoles));
var Hunter = (function (_super) {
    __extends(Hunter, _super);
    function Hunter() {
        _super.apply(this, arguments);
        this.roles = Roles.hunter;
        this.alive = 1;
    }
    return Hunter;
}(DistributionRoles));
var Witch = (function (_super) {
    __extends(Witch, _super);
    function Witch() {
        _super.apply(this, arguments);
        this.roles = Roles.witch;
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
        this.wolfmans = [];
    }
    Night.prototype.add = function (item) {
        this.player.push(item);
    };
    /*将狼人分为一组*/
    Night.prototype.addWolfMan = function () {
        for (var i = 0; i < this.player.length; i++) {
            if (this.player[i].roles === Roles.wolfman) {
                this.wolfmans.push(this.player[i]);
            }
        }
    };
    Night.prototype.wolfManKill = function (index) {
        document.write("请指定杀人目标!");
        this.player[index].alive = 0;
    };
    Night.prototype.witch = function (item, index) {
        if (item.alive == 1) {
            document.write("是否使用解药?");
            if (true && item.poison == 1) {
                /*救一个被杀的人*/
                var live = [];
                for (var i = 0; i < this.player.length; i++) {
                    if (this.player[i].alive === 0) {
                        live.push(this.player[i]);
                    }
                }
                live[index].alive = 1;
                item.poison = 0;
            }
            document.write("是否使用毒药？");
            if (true && item.antidote == 1) {
                /*杀死一个人*/
                var dead = [];
                for (var i = 0; i < this.player.length; i++) {
                    if (this.player[i].alive === 1) {
                        dead.push(this.player[i]);
                    }
                }
                dead[index].alive = 0;
                item.antidote = 0;
            }
        }
    };
    return Night;
}());
/*天亮*/
var Day = (function () {
    function Day() {
    }
    Day.prototype.show = function () {
        表明被杀的人;
        if (被杀的是猎人) {
            document.write("请选择要射杀的目标。");
            猎人选择目标;
        }
        else {
            this.lastWords;
        }
    };
    Day.prototype.lastWords = function () {
        遗言;
    };
    Day.prototype.speak = function () {
        for (var i = 0; i < 玩家数; i++) {
            玩家发言;
        }
    };
    Day.prototype.vote = function () {
        投票;
    };
    Day.prototype.rule = function () {
        村民或狼人死光;
        游戏结束;
    };
    return Day;
}());
//# sourceMappingURL=gameFunction.js.map