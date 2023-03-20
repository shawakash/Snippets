function divide(x, y) {
    return x/y;
}

const log = {
    warning: (info) => {
        console.log('warning :( ', info)
    },
    error: (info) => {
        console.log('error :( ', info)
    },
};
const hello = 'Hola';

module.exports = {divide, log, hello};