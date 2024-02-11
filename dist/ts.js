"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MergeFunction = {
    merge: function (collection1, collection2, collection3) {
        var list = [];
        var i = 0;
        var j = 0;
        var k = 0;
        var collection3_mod = [];
        for (var l3 = collection3.length - 1; l3 >= 0; l3--) {
            collection3_mod.push(collection3[l3]);
        }
        while (i < collection1.length && j < collection2.length && k < collection3_mod.length) {
            var a = collection1[i];
            var b = collection2[j];
            var c = collection3_mod[k];
            var ca = 0;
            var cb = 0;
            var cc = 0;
            var min_val = Math.min(a, b, c);
            console.log(min_val);
            list.push(min_val);
            if (min_val == collection1[i]) {
                if (ca == 0) {
                    i++;
                }
                else {
                    i = 0;
                }
            }
            else if (min_val == collection2[j]) {
                if (cb == 0) {
                    j++;
                }
                else {
                    j = 0;
                }
            }
            else if (min_val == collection3_mod[k]) {
                if (cc == 0) {
                    k++;
                }
                else {
                    k = 0;
                }
            }
            if (i >= collection1.length) {
                i = 0;
                ca = 1;
                collection1[0] = 99;
            }
            else if (j >= collection2.length) {
                j = 0;
                cb = 1;
                collection2[0] = 99;
            }
            else if (k >= collection3_mod.length) {
                k = 0;
                cc = 1;
                collection3_mod[0] = 99;
            }
            console.log("loop count :" + "a:" + a + " b: " + b + " c: " + c);
            if (a == 99 && b == 99 && c == 99) {
                list.pop();
                break;
            }
        }
        return list;
    }
};
exports.default = MergeFunction;
// let collection3: number[] = [5,4,3,2,1];
// let collection3_mod: number[] = [];
// for(let i = collection3.length-1;i>=0;i--){
//     collection3_mod.push(collection3[i]);
// }
// for (let data of collection3_mod) {
//     console.log(data);
// }
