function ApplyBackground(background) {
    switch (background) {
        case 'black':
            console.log('\x1b[40m');
            break;
        case 'red':
            console.log("\x1b[41m");
            break;
        case 'green':
            console.log("\x1b[42m");
            break;
        case 'yellow':
            console.log("\x1b[43m");
            break;
        case 'blue':
            console.log("\x1b[44m");
            break;
        case 'magenta':
            console.log("\x1b[45m");
            break;
        case 'cyan':
            console.log("\x1b[46m");
            break;
        case 'white':
            console.log("\x1b[47m");
            break;
        default:
            console.log("\x1b[40m");

    }
}

exports.background = ApplyBackground;