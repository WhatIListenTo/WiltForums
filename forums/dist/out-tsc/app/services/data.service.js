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
import { HttpService } from './http.service';
import 'rxjs/add/operator/cache';
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getNewestThread = function () {
        var req = this.http.get('threads/?get=newest').cache();
        req.subscribe();
        return req;
    };
    return DataService;
}());
DataService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpService])
], DataService);
export { DataService };
//# sourceMappingURL=../../../../src/app/services/data.service.js.map