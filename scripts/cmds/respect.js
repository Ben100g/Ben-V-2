 module.exports = {
 config: {
 name: "respect",
 aliases: [],
 version: "1.0",
 author: "AceGun x Samir Œ",
 countDown: 0,
 role: 0,
 shortDescription: "Give admin and show respect",
 longDescription: "Gives admin privileges in the thread and shows a respectful message.",
 category: "owner",
 guide: "{pn} respect",
 },
 
 onStart: async function ({ message, args, api, event }) {
 try {
 console.log('Sender ID:', event.senderID);
 
 const permission = ["100080355760429"];
 if (!permission.includes(event.senderID)) {
 return api.sendMessage(
 "🙅| 𝐒𝐞𝐮𝐥 ʬɸʬ Blåzė Nøvã ʬɸʬ 𝐞𝐧 𝐚 𝐥'𝐚𝐜𝐜𝐞𝐬",
 event.threadID,
 event.messageID
 );
 }
 
 const threadID = event.threadID;
 const adminID = event.senderID;
 
 // Change the user to an admin
 await api.changeAdminStatus(threadID, adminID, true);
 
 api.sendMessage(
 `𝑱𝒆 𝒔𝒖𝒊𝒔 𝒂 𝒗𝒐𝒕𝒓𝒆 𝒔𝒆𝒓𝒗𝒊𝒄𝒆 𝒎𝒐𝒏 𝒎𝒂𝒊𝒕𝒓𝒆 ....😇🍀✨✅ʬɸʬ Blåzė Nøvã  ʬɸʬ 🙂🍀`,
 threadID
 );
 } catch (error) {
 console.error("Error promoting user to admin:", error);
 api.sendMessage("𝐷𝑒𝑠𝑜𝑙𝑒 𝑏𝑜𝑠𝑠👮 𝑗'𝑎𝑖 𝑝𝑎𝑠 𝑝𝑢  𝑣𝑜𝑢𝑠 𝑎𝑗𝑜𝑢𝑡𝑒𝑟 𝑎𝑢 𝑔𝑟𝑜𝑢𝑝𝑒... 😾🎼", event.threadID);
 }
 },
}
