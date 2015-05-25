var Sequence = (function () {
    function Sequence() {
        this.counter = 1;
    }
    Sequence.next = function () {
        var str = "" + Sequence.INSTANCE.counter++;
        var pad = "ui-";
        return pad.concat(str);
    };
    Sequence.INSTANCE = new Sequence();
    return Sequence;
})();
//# sourceMappingURL=Sequence.js.map