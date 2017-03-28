define('index', [], function () {
    var a = 1;
    var b = 2;
    var c = 3;
    var d = 4;
    return [
        'a',
        'b',
        'c'
    ];
});
define('main', ['index'], function () {
    var a = 1;
    return [
        'd',
        'e',
        'f'
    ];
});