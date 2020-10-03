module.exports = {
	name: 'server-info',
	description: 'Returns information about the server.',
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nDate created: ${message.guild.createdAt}\nServer region: ${message.guild.region}`);
	},
};