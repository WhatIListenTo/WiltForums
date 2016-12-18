var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
var isDev = true;
var apiUrl;
if (!isDev) {
    apiUrl = 'https://forum.wilt.fm/api/';
}
else {
    apiUrl = 'http://localhost:8000/api/';
}
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
    }
    HttpService.prototype.resetHeaders = function () {
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
    };
    HttpService.prototype.updateHeader = function (key, value) {
        this.headers[key] = value;
    };
    HttpService.prototype.clearToken = function (key) {
        delete this.headers[key];
    };
    HttpService.prototype.get = function (url, params) {
        if (params === void 0) { params = {}; }
        url = "" + apiUrl + url;
        return this.request('get', url, {}, params);
    };
    HttpService.prototype.post = function (url, body, params) {
        if (body === void 0) { body = {}; }
        if (params === void 0) { params = {}; }
        url = "" + apiUrl + url;
        return this.request('post', url, body, params);
    };
    HttpService.prototype.put = function (url, body, params) {
        if (body === void 0) { body = {}; }
        if (params === void 0) { params = {}; }
        return this.request('put', url, body, params);
    };
    HttpService.prototype.patch = function (url, data) {
        if (data === void 0) { data = {}; }
        url = "" + apiUrl + url;
        var headers = new Headers(this.headers);
        var options = new RequestOptions({ headers: headers });
        console.log(headers);
        return this.request('patch', url, data);
    };
    HttpService.prototype.delete = function (url) {
        url = "" + apiUrl + url;
        var headers = new Headers(this.headers);
        var options = new RequestOptions({ headers: headers });
        return this.http.delete(url, options);
    };
    HttpService.prototype.request = function (method, url, body, params) {
        if (body === void 0) { body = {}; }
        if (params === void 0) { params = {}; }
        var headers = new Headers(this.headers);
        var endsInSlashOrParams = /.*\/$|.*\?.*/g;
        if (!endsInSlashOrParams.test(url)) {
            url += '/';
        }
        var paramStr = Object.keys(params).reduce(function (acc, cur, i) { return "" + acc + (i > 0 ? '&' : '') + cur + "=" + params[cur]; }, '');
        var options = new RequestOptions({ headers: headers, search: paramStr });
        var obs;
        if (method.toLowerCase() === 'get') {
            obs = this.http[method](url, options);
        }
        else {
            obs = this.http[method](url, body, options);
        }
        return obs.map(function (res) {
            try {
                return res.json();
            }
            catch (e) {
                console.log(e);
            }
            return {};
        });
    };
    return HttpService;
}());
HttpService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], HttpService);
export { HttpService };
//# sourceMappingURL=../../../../src/app/services/http.service.js.map