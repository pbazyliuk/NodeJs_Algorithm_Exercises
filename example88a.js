process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdout.write('Press enter to find out the result?!');
process.stdin.once('data', function() {
    data = process.argv.slice(2);
    var res = searchChar(data[0], data[1]);
    process.stdout.write(res);
    process.exit();
});

function searchChar(n, m) {
    var numberSquare = n * n + "";

    if (numberSquare.indexOf(m) != -1) {
        return "Число " + numberSquare + " містить в собі цифру " + m;
    } else {
        return "Число " + numberSquare + " не містить в собі цифру " + m;
    }
}
