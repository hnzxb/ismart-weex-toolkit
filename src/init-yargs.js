// set command args

const yargs = require('yargs');


const userinfo = '\nUsage: weex <foo/bar/we_file_or_dir_path>  [options]'
        + '\nUsage: weex init [projectName]';

var argv = yargs
    .usage(userinfo)
    .option('port' , {demand:false})
    .default('port',8081)
    .describe('port', 'http listening port number ,default is 8081')
    .option('wsport' , {demand:false})
    .default('wsport',8082)
    .describe('wsport', 'websocket listening port number ,default is 8082')
    .epilog('Usage:weex <command>\n\nwhere <command> is one of:\n\n \tdebug , run , compile\n\nweex <command> --help      help on <command>')
    .argv  ;


module.exports = {argv,yargs} ;