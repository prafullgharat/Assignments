"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function getNextArmstrong() {
    var index, num, sum, len, temp, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                index = 1;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 8]);
                _a.label = 2;
            case 2:
                if (!true) return [3 /*break*/, 6];
                num = index;
                sum = 0;
                len = num.toString().length;
                while (num > 0) {
                    temp = num % 10;
                    sum += Math.pow(temp, len);
                    num = Math.floor(num / 10);
                }
                if (!(sum === index)) return [3 /*break*/, 4];
                return [4 /*yield*/, index++];
            case 3:
                _a.sent();
                return [3 /*break*/, 5];
            case 4:
                index++;
                _a.label = 5;
            case 5: return [3 /*break*/, 2];
            case 6: return [3 /*break*/, 8];
            case 7:
                e_1 = _a.sent();
                console.log("Error caught : Number went above 1000");
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}
var armstrong = getNextArmstrong();
function reset() {
    armstrong = getNextArmstrong();
}
function getValue() {
    var value = armstrong.next().value;
    if (value <= 1000) {
        document.getElementById("result").innerHTML += "<p> " + value + " </p>";
    }
    else {
        armstrong.throw(new Error('Number went above 1000'));
        reset();
        document.getElementById("result").innerHTML += "<p>Armstrong Number goes above 1000. Reseting Count...   </p>";
    }
}
