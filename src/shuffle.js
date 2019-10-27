function fisherYates(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        a[i], a[j] = a[j], a[i];
    }
    return a;
}

function shuffleResigDelete(r) {
    var pos;
    var out = [];
    while (r.length > 0) {
        pos = parseInt(Math.random()*r.length);
        out.push(r[pos]);

        rest = r.slice(pos - r.length + 1);
        r.length = pos;
        r.push.apply(r, rest);
    }
    return out;
}
