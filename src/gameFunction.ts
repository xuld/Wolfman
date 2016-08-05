enum Roles {

    wolfman,

    villagers,

    hunter,

    witch

}

/*分配角色*/
class DistributionRoles {

    roles: Roles;

    alive: number;/*生命，1代表活着，0代表死去*/

}

class Witch extends DistributionRoles {

    roles = Roles.witch;

    poison = 1;

    antidote = 1;

}

/*天黑*/
class Dark {

    wolfmans: DistributionRoles[] = [];

    addWolfMan(item: DistributionRoles) {
        if (item.roles === Roles.wolfman) {
            this.wolfmans.push(item);
        }
    }

    wolfManKill() {
        document.write("请指定杀人目标!");
    }

    witch(item: Witch) {
        if (item.alive == 1) {
            document.write("是否使用解药?");
            if (true && item.poison == 1) {
                救一个被杀的人
                item.poison = 0;
            }
            document.write("是否使用毒药？");
            if (true && item.antidote == 1) {
                杀死一个人
                item.antidote = 0;
            }
        }
    }

}

/*天亮*/
class Day {

    show() {
        表明被杀的人
        if (被杀的是猎人) {
            document.write("请选择要射杀的目标。");
            猎人选择目标
        }
        else {
            this.lastWords;
        }
    }

    lastWords() {
        遗言
    }

    speak() {
        for (let i = 0; i < 玩家数; i++){
            玩家发言
        }
    }

    vote() {
        投票
    }

    rule() {
        村民或狼人死光，游戏结束
    }

}