module.exports = {
	main: function(bot, message) {
		if(msg.author.id === "171319044715053057") {
			var game = message.content;
			bot.user.setStatus('online', game);
			message.reply("Successfully set game to " + game);
		}
	}
};