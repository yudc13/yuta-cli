#! /usr/bin/env node

const yargs = require('yargs/yargs')

const pkg = require('../package.json')

const context = {
	yutaVersion: pkg.version
}

yargs()
	.usage('Usage: $0 <command> [options]')
	.demandCommand(1, '至少需要一个命令')
	.fail((err, msg) => {
		console.log(err)
		console.log(msg)
	})
	.strict()
	.alias('h', 'help')
	.alias('v', 'version')
	.wrap(yargs().terminalWidth())
	.epilogue(`结尾描述`)
	.options({
		debug: {
			type: Boolean,
			describe: 'Bootstrap debug mode',
			alias: 'd'
		}
	})
	.option('registry', {
		type: Boolean,
		describe: 'default registry',
		alias: 'r'
		// hidden: true
	})
	.group(['debug'], 'Dev Options')
	.command('init [name]', 'init a project', yargs => {
		yargs
			.option('name', {
				type: 'string',
				describe: 'Name of a project',
				alias: 'n'
			})
	}, argv => {
		console.log(argv)
	})
	.parse(process.argv.slice(2), context)

console.log('core')
