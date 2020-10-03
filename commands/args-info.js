module.exports = {
	name: 'args-info',
	description: 'Returns information about the arguments following this command.',
	args: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
		message.channel.send(`First argument: ${args[0]}`);
	},
};