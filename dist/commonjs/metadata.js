'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _symbols = require('./symbols');

var Metadata = (function () {
    Metadata.getOrCreateMetadata = function getOrCreateMetadata(target) {
        if (target[_symbols.Symbols.metadata] === undefined) {
            target[_symbols.Symbols.metadata] = new Metadata();
        }

        return target[_symbols.Symbols.metadata];
    };

    Metadata.exists = function exists(target) {
        return target[_symbols.Symbols.metadata] !== undefined && target[_symbols.Symbols.metadata] instanceof Metadata;
    };

    function Metadata() {
        _classCallCheck(this, Metadata);

        this.handlers = new Map();
        this.awaiters = new Map();
    }

    return Metadata;
})();

exports.Metadata = Metadata;