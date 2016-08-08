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

    dead: DistributionRoles[] = [];

    live = this.player;

    kill(index: number) {
        if (this.live.length > 1) {
            let i = this.live[index];
            this.dead.push(i);
            this.live.splice(index, 1);
        }
    }

    save(index: number) {
        if (this.dead.length > 0) {
            let i = this.dead[index];
            this.live.push(i);
            this.dead.splice(index, 1);
        }
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

    villagers: DistributionRoles[] = [];

    /*将村民分为一组*/
    addVillagers() {
        for (let i = 0; i < this.player.length; i++) {
            if (this.player[i].roles === (Roles.villagers ||  Roles.hunter ||  Roles.witch)) {
                this.villagers.push(this.player[i]);
            }
        }
    }

    wolfManKill(index:number) {
        document.write("请指定杀人目标!");
        this.kill(index);
    }

    witch(item: Witch,index:number) {
        if (item.alive == 1) {
            document.write("是否使用解药?");
            if (true && item.poison == 1) {
                /*救一个被杀的人*/
                this.save(index);
                item.poison = 0;
            }
            document.write("是否使用毒药？");
            if (true && item.antidote == 1) {
                /*杀死一个人*/
                this.kill(index);
                item.antidote = 0;
            }
        }
    }

}

/*天亮*/
class Day {

    m = new Night();

    show(item: DistributionRoles, index: number) {
        document.write("昨晚被杀的是" + this.m.dead[this.m.dead.length]);
        if (item.roles === Roles.hunter) {
            document.write("请选择要射杀的目标。");
            /*猎人选择目标*/
            this.m.kill(index);
            this.lastWords;
        }
        else {
            this.lastWords;
        }
    }

    /*遗言*/
    lastWords() {
        document.write("请发表遗言");
        document.write();
    }

    /*玩家发言*/
    speak() {
        for (let i = 0; i < this.m.player.length; i++){
            document.write();
        }
    }

    /*计算票数最多的玩家*/
    statistical(arr) {
        arr = arr || [];

        let count = 1;

        let yuansu = []; 

        let sum = [];  

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
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

        let newsum = []; 
         
        for (let item in sum) {
            newsum[item] = sum[item];
        }
        newsum.sort();   

        let index = 0;

        let fcount = 1;

        for (let i = 0; i < sum.length; i++) {
            if (sum[i] == newsum[newsum.length - 1]) { 
                index = yuansu[i] ;
                fcount++;
            }

        }
        if (fcount = 1) {
            return index;
        }
    }

    data = [];

    /*投票*/
    vote() {
        for (let i = 0; i < this.m.live.length; i++){
            this.data.push(document.write());
        }
        this.m.kill(this.statistical(this.data));
    }

    wolfManAllEquals0(arr: DistributionRoles[]) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].alive != 0) {
            return false;
        }
    }
    return true;
    }

    villagersAllEquals0(arr: DistributionRoles[]) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].alive != 0) {
                return false;
            }
        }
        return true;
    }

    rule() {
        /*村民或狼人死光，游戏结束*/
        if (this.wolfManAllEquals0(this.m.wolfmans) && this.villagersAllEquals0(this.m.villagers) === true) {
            return "游戏结束！";
        }
    }

}