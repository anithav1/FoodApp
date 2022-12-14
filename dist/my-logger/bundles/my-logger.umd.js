(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-logger', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['my-logger'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var MyLoggerModule = /** @class */ (function () {
        function MyLoggerModule() {
        }
        return MyLoggerModule;
    }());
    MyLoggerModule.ɵmod = i0.ɵɵdefineNgModule({ type: MyLoggerModule });
    MyLoggerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MyLoggerModule_Factory(t) { return new (t || MyLoggerModule)(); }, imports: [[]] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MyLoggerModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [],
                        exports: []
                    }]
            }], null, null);
    })();

    var LoggerService = /** @class */ (function () {
        function LoggerService() {
        }
        LoggerService.prototype.log = function (message) {
            console.log(message);
        };
        return LoggerService;
    }());
    LoggerService.ɵfac = function LoggerService_Factory(t) { return new (t || LoggerService)(); };
    LoggerService.ɵprov = i0.ɵɵdefineInjectable({ token: LoggerService, factory: LoggerService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LoggerService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    /*
     * Public API Surface of my-logger
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LoggerService = LoggerService;
    exports.MyLoggerModule = MyLoggerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-logger.umd.js.map
