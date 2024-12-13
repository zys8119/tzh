#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.__esModule = true;
var process_1 = require("process");
var child_process_1 = require("child_process");
var axios_1 = require("axios");
var fanyiQuery = function (query, isZhToEN) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, axios_1["default"])({
                    url: "https://fanyi.baidu.com/ait/text/translate",
                    headers: {
                        accept: "text/event-stream",
                        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
                        "acs-token": "1723618810249_1723618864620_IS0r1fMXI9QbLt/65yKMdqzYvkoUkwkKc+JBsDbZMuhdIp8VV+zKcXtRw07rPx+Ghrcuj7ZNKHltXvS3+OE4m/d7OzGKfneTT0cFjWhVCwXSsEG0X/DyxE4j12W/7l3vpKts7R8Ih/dIExjHBm+yK0J8g2DlT9o4REZITQSgN5ggntL5GeU09iIEY4THJSmFeYZM2Co/iFgjpzoXzmQTOVVzAjvLFSeMecZ8FVWSTYFJ75cOaqcza1GrvFtdXbB/aZuu6WAfG4TA4CC5Gehx08sw1a4Y+J18P4UcLO52FIQQE1i0ub1KP70OGm6QmPB32+z8h/ztiO7Y8/KNMUFLPYgl5uz6Mk6H+X3N5ZILEi2cRHqpDeyzdrMtzTs0V4AQwEnlvRsXU77VuWsCCE8WbCg8vt/cbGGBKVac25rZXxKYNU4SpucVK2iAAaSY0c0atzYwPQwkB+i6wruvH+0RUavNORWD/xBaR6PdMfnPFBrkZvU9ereBCD16Pfm3yffH",
                        "cache-control": "no-cache",
                        "content-type": "application/json",
                        pragma: "no-cache",
                        "sec-ch-ua": '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": '"macOS"',
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin"
                    },
                    method: "POST",
                    data: {
                        query: query,
                        from: isZhToEN ? "zh" : "en",
                        to: isZhToEN ? "en" : "zh",
                        reference: "",
                        corpusIds: [],
                        qcSettings: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
                        needPhonetic: false,
                        domain: "common",
                        milliTimestamp: 1723618864689
                    }
                })];
            case 1:
                data = (_a.sent()).data;
                return [2 /*return*/, data];
        }
    });
}); };
var translate = function (translateQuery) { return __awaiter(void 0, void 0, void 0, function () {
    var argvA, isfanyi, isZhToEN, argvAText, query, result, commend, tgt_split_1, query_split, query_split_max_line_length_1, e_1;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                _o.trys.push([0, 5, , 6]);
                argvA = process_1.argv.slice(2);
                if (!translateQuery && argvA.length === 0) {
                    console.log("请输入需要翻译的内容");
                    return [2 /*return*/];
                }
                isfanyi = false;
                // 从命令行获取需要翻译的内容
                if (["--query", "-q", "-w", "-word"].includes((_d = (_b = (_a = argvA === null || argvA === void 0 ? void 0 : argvA[0]) === null || _a === void 0 ? void 0 : _a.trim) === null || _b === void 0 ? void 0 : (_c = _b.call(_a)).toLowerCase) === null || _d === void 0 ? void 0 : _d.call(_c))) {
                    argvA = argvA.slice(1);
                    isfanyi = true;
                }
                isZhToEN = false;
                if (["--en", "-en"].includes((_h = (_f = (_e = argvA === null || argvA === void 0 ? void 0 : argvA[0]) === null || _e === void 0 ? void 0 : _e.trim) === null || _f === void 0 ? void 0 : (_g = _f.call(_e)).toLowerCase) === null || _h === void 0 ? void 0 : _h.call(_g))) {
                    argvA = argvA.slice(1);
                    isZhToEN = true;
                }
                argvAText = translateQuery || argvA.join(" ");
                query = "";
                result = "";
                if (!(translateQuery || isfanyi)) return [3 /*break*/, 2];
                query = argvAText;
                return [4 /*yield*/, fanyiQuery(argvAText, isZhToEN)];
            case 1:
                result = _o.sent();
                return [3 /*break*/, 4];
            case 2:
                commend = (0, child_process_1.execSync)(argvAText);
                query = commend.toString();
                return [4 /*yield*/, fanyiQuery(query, isZhToEN)];
            case 3:
                result = _o.sent();
                _o.label = 4;
            case 4:
                result = result
                    .split("\n")
                    .filter(function (e) { return /^data:/.test(e); })
                    .map(function (e) { return JSON.parse(e.replace(/^data:/, "").trim()); })
                    .filter(function (e) { var _a; return ["Translating", "GetKeywordsSucceed"].includes((_a = e === null || e === void 0 ? void 0 : e.data) === null || _a === void 0 ? void 0 : _a.event); });
                tgt_split_1 = (_m = (_l = (_k = (_j = result
                    .filter(function (e) { var _a; return ["Translating"].includes((_a = e === null || e === void 0 ? void 0 : e.data) === null || _a === void 0 ? void 0 : _a.event); })
                    .map(function (e) {
                    var _a;
                    return ({
                        tgt: (_a = e.data.list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e.dst; }).join(" \n ")
                    });
                })) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k.tgt) === null || _l === void 0 ? void 0 : _l.split) === null || _m === void 0 ? void 0 : _m.call(_l, "\n");
                query_split = query.split("\n");
                query_split_max_line_length_1 = query_split.reduce(function (a, b) { return Math.max(a, b.length); }, 0);
                console.log(query_split
                    .map(function (e, k) {
                    return "".concat(e.padEnd(query_split_max_line_length_1, "-"), "-> ").concat((tgt_split_1 === null || tgt_split_1 === void 0 ? void 0 : tgt_split_1[k]) || "");
                })
                    .filter(function (e) {
                    return e.trim() !==
                        "->".padStart(query_split_max_line_length_1 + 2, "-").trim();
                })
                    .join("\n"));
                return [3 /*break*/, 6];
            case 5:
                e_1 = _o.sent();
                console.error(e_1);
                console.error(e_1.message);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var input_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!process.stdin.isTTY) return [3 /*break*/, 2];
                    // 命令行模式
                    return [4 /*yield*/, translate()];
                case 1:
                    // 命令行模式
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    // 管道模式
                    process.stdin.setEncoding("utf8");
                    input_1 = "";
                    process.stdin.on("data", function (chunk) {
                        input_1 += chunk;
                    });
                    process.stdin.on("end", function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, translate(input_1)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
})();
