console.log(process.argv)


for (var i = 2; i < process.argv.length; i ++) {
    var number;
    number += Number(process.argv[i])
}
