function applyPimp(pimp) {
    var preparePimp = "";
    for (let i in pimp) {
        switch (pimp[i].toLowerCase()) {
            case 'bgblack':
                preparePimp += "\x1b[40m";
                break;
            case 'bgred':
                preparePimp += "\x1b[41m";
                break;
            case 'bggreen':
                preparePimp += "\x1b[42m";
                break;
            case 'bgyellow':
                preparePimp += "\x1b[43m";
                break;
            case 'bgblue':
                preparePimp += "\x1b[44m";
                break;
            case 'bgmagenta':
                preparePimp += "\x1b[45m";
                break;
            case 'bgcyan':
                preparePimp += "\x1b[46m";
                break;
            case 'bgwhite':
                preparePimp += "\x1b[47m";
                break;
            case 'bright':
                preparePimp += "\x1b[1m";
                break;
            case 'reset':
                preparePimp += "\x1b[0m";
                break;
            case 'dim':
                preparePimp += "\x1b[2m";
                break;
            case 'underscore':
                preparePimp += "\x1b[4m";
                break;
            case 'blink':
                preparePimp += "\x1b[5m";
                break;
            case 'reverse':
                preparePimp += "\x1b[7m";
                break;
            case 'hidden':
                preparePimp += "\x1b[8m";
                break;
            case 'strikethrough':
                preparePimp += "\x1b[9m";
                break;
            case 'test':
                preparePimp += "\x1b[4m";
                break;
            case 'black':
                preparePimp += "\x1b[30m";
                break;
            case 'red':
                preparePimp += "\x1b[31m";
                break;
            case 'green':
                preparePimp += "\x1b[32m";
                break;
            case 'yellow':
                preparePimp += "\x1b[33m";
                break;
            case 'blue':
                preparePimp += "\x1b[34m";
                break;
            case 'magenta':
                preparePimp += "\x1b[35m";
                break;
            case 'cyan':
                preparePimp += "\x1b[36m";
                break;
            case 'white':
                preparePimp += "\x1b[37m";
                break;
            case 'grey':
                preparePimp += "\x1b[90m";
                break;
            default:
                break;

        }
    }
    return preparePimp;
}

exports.applyPimp = applyPimp;
