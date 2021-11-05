
const Discord = require("discord.js");
const Yaxi = new Discord.Client();
//////// playing or dnd  streaming ////////
Yaxi.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `ماسی بە ٧ ھەزاریە.`,
 
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    Yaxi.user.setActivity(STREAMING, {      
    type: "STREAMING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
Yaxi.on("ready", () => {
    var join = Yaxi.channels.get("844157774836793354"); /// id voice
    if (join) join.join();
  });
//////////////// tokn lera da bne 
Yaxi.login("mfa.TRy4tqU_rGZvcPDSoHMpOVm3v4Zimn2y1ubHZB8YNN6lVzOrQhGQ-0_HSkDr214gmPX2DthzrzRVOF6V0kBO");
