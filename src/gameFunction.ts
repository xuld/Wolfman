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

class WolfMan extends DistributionRoles {

    roles = Roles.wolfman;

    alive = 1;

}

class Villagers extends DistributionRoles {

    roles = Roles.villagers;

    alive = 1;

}

class Hunter extends DistributionRoles {

    roles = Roles.hunter;

    alive = 1;

}

class Witch extends DistributionRoles {

    roles = Roles.witch;

    alive = 1;

    poison = 1;

    antidote = 1;

}

/*天黑*/
class Night {

    player: DistributionRoles[] = [];

    add(item: DistributionRoles) {
        this.player.push(item);
    }

    wolfmans: DistributionRoles[] = [];

    /*将狼人分为一组*/
    addWolfMan() {
        for (let i = 0; i < this.player.length; i++) {
            if (this.player[i].roles === Roles.wolfman) {
                this.wolfmans.push(this.player[i]);
            }
        }
    }

    wolfManKill(index:number) {
        document.write("请指定杀人目标!");
        this.player[index].alive = 0;
    }

    witch(item: Witch,index:number) {
        if (item.alive == 1) {
            document.write("是否使用解药?");
            if (true && item.poison == 1) {
                /*救一个被杀的人*/
                let live: DistributionRoles[] = [];
                for (let i = 0; i < this.player.length; i++){
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
                let dead: DistributionRoles[] = [];
                for (let i = 0; i < this.player.length; i++) {
                    if (this.player[i].alive === 1) {
                        dead.push(this.player[i]);
                    }
                }
                dead[index].alive = 0;
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