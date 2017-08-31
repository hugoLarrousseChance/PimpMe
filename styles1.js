function ApplyStyles(style) {
    switch (style) {
        case 'bright':
            console.log('\x1b[1m');
            break;
        case 'reset':
            console.log("\x1b[0m");
            break;
        case 'dim':
            console.log("\x1b[2m");
            break;
        case 'underscore':
            console.log("\x1b[4m");
            break;
        case 'blink':
            console.log("\x1b[5m");
            break;
        case 'reverse':
            console.log("\x1b[7m");
            break;
        case 'hidden':
            console.log("\x1b[8m");
            break;
        case 'test':
            console.log("\x1b[4m");
            break;
        default:
            console.log("\x1b[0m");

    }
}

exports.styles = ApplyStyles;