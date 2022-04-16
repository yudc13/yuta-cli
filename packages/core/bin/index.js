#! /usr/bin/env node

const yargs = require('yargs/yargs')

const { hideBin } = require('yargs/helpers')

const arg = hideBin(process.argv)

const cli = yargs(arg)

cli
	.usage('Usage: $0 <command> [options]')
	.demandCommand(1, '至少需要一个命令')
	.strict()
	.alias('h', 'help')
	.alias('v', 'version')
	.wrap(cli.terminalWidth())
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
	.argv

console.log('core')
