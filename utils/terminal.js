const util = require('util');
const exec = util.promisify(require('child_process').exec);
async function ffmpeg() {
    try {
        const { stdout, stderr } = await exec('ffmpeg -version');
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
    } catch (err) {
        console.error(err);
    };
};
ffmpeg()