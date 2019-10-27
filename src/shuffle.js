module.exports = {
  fisherYates
}

function fisherYates(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        a[i], a[j] = a[j], a[i];
    }
    return a;
}
