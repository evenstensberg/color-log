const bold = (t) => `\x1b[1m${t}`;
const black = (t) => `\x1b[30m${t}`;
const red = (t) => `\x1b[31m${t}`;
const green = (t) => `\x1b[32m${t}`;
const yellow = (t) => `\x1b[33m${t}`;
const blue = (t) => `\x1b[34m${t}`;
const magneta = (t) => `\x1b[35m${t}`;
const cyan = (t) => `\x1b[36m${t}`;
const light_gray = (t) => `\x1b[37m${t}`;
const dark_gray = (t) => `\x1b[90m${t}`;
const light_red = (t) => `\x1b[91m${t}`;
const light_green = (t) => `\x1b[92m${t}`;
const light_yellow = (t) => `\x1b[93m${t}`;
const light_blue = (t) => `\x1b[94m${t}`;
const light_magneta = (t) => `\x1b[95m${t}`;
const light_cyan = (t) => `\x1b[96m${t}`;
const white = (t) => `\x1b[97m${t}`;

module.exports = {
    bold: bold,
    black,
    red,
    green,
    yellow,
    blue,
    magneta,
    light_gray,
    cyan,
    dark_gray,
    light_red,
    light_green,
    light_yellow,
    light_blue,
    light_magneta,
    light_cyan,
    white

};