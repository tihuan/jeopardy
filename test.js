// requirement: keep the name variable unaccessible from the public

function test() {
    var _name = 'default'
}

console.log(typeof(nameService.getName) === 'function');
console.log(typeof(nameService.setName) === 'function');
console.log(nameService.getName() === 'default');
nameService.setName('success!');

console.log(nameService.getName() === 'success!');

