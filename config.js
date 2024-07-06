const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_19_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDkzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk5LFxuICAgICAgICA3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDcyLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDcyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTUxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDMsXG4gICAgICAgIDg0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMixcbiAgICAgICAgOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICA2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU3LFxuICAgICAgICA0MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NixcbiAgICAgICAgNTksXG4gICAgICAgIDM5LFxuICAgICAgICAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ0LFxuICAgICAgICA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxRlp5OWJ6a09XbEg4TFUvZmU5NUlZU2IyVE1xQVczbkY4R1ZZaE5DRUR3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3Y3h0YVRjRVJKT0lKdXRLdkdFdk5nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA4MjhlYjcwLWRlYzUtNGU1Zi05ZGNkLTBhNjk4ZDI1ZGRjYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICAxMTUsXG4gICAgICAyMzYsXG4gICAgICA4MixcbiAgICAgIDI0LFxuICAgICAgMjMwLFxuICAgICAgMzcsXG4gICAgICA3MSxcbiAgICAgIDExMyxcbiAgICAgIDE4MyxcbiAgICAgIDIyMixcbiAgICAgIDIxMyxcbiAgICAgIDE3MCxcbiAgICAgIDExNixcbiAgICAgIDI1NCxcbiAgICAgIDE1NixcbiAgICAgIDMwLFxuICAgICAgODgsXG4gICAgICAxNTksXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMjU1LFxuICAgICAgMTc3LFxuICAgICAgMTQsXG4gICAgICAxMTMsXG4gICAgICAxMjEsXG4gICAgICA4NCxcbiAgICAgIDE0NCxcbiAgICAgIDEwNSxcbiAgICAgIDE0LFxuICAgICAgMTA5LFxuICAgICAgMTMsXG4gICAgICAxNDAsXG4gICAgICAxODksXG4gICAgICAyNCxcbiAgICAgIDE3MCxcbiAgICAgIDIwMSxcbiAgICAgIDEwMCxcbiAgICAgIDE2MCxcbiAgICAgIDEwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEV0FKOFo2UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzODYyMTk4MjoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTc1MjYyOTIxODExODE6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2o3bnZVREVLYTBwTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrbkRnNXUxYkRHY0lTQUppK2s4UUwzbi94bEhyTkZ6V21UZjJaeUFsSVFJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNIeERZVVIySzFvZDhBc0RLaithT3pDdzhzQ2hEVEREUzJGQ3p6WVVIaFovMDA1cUhPa25idXpLVFdGa0tjMnF4MXlvY1JmempVYmR5SnNZZG9ZQ0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJidWp5UVFLait1MkpUYlBROGF0MFVMS3N1NzNlOUtLU2VVeDhwaDNRa0ViTnZYVW9PVlRJaVVxeFpsaGtQQTBIVXFPL3lEcU1IU2xqYkRlZTN2UWdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzg2MjE5ODI6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjYxMTYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkdvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOR28uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDREx1NlVXbWFMbkFyR2RKWFZha1FORWlSRGxoWCtCSldpWXh2K2JsSXFvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNTExODA0NTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyNjExNDY1OTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
