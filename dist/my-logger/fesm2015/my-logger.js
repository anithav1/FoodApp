import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵsetClassMetadata, NgModule, ɵɵdefineInjectable, Injectable } from '@angular/core';

class MyLoggerModule {
}
MyLoggerModule.ɵmod = ɵɵdefineNgModule({ type: MyLoggerModule });
MyLoggerModule.ɵinj = ɵɵdefineInjector({ factory: function MyLoggerModule_Factory(t) { return new (t || MyLoggerModule)(); }, imports: [[]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MyLoggerModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [],
                exports: []
            }]
    }], null, null); })();

class LoggerService {
    constructor() { }
    log(message) {
        console.log(message);
    }
}
LoggerService.ɵfac = function LoggerService_Factory(t) { return new (t || LoggerService)(); };
LoggerService.ɵprov = ɵɵdefineInjectable({ token: LoggerService, factory: LoggerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LoggerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/*
 * Public API Surface of my-logger
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LoggerService, MyLoggerModule };
//# sourceMappingURL=my-logger.js.map
