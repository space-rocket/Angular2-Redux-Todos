System.register(['angular2/src/facade/lang', 'angular2/src/facade/exceptions', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var lang_1, exceptions_1, core_1;
    var VisibleTodosPipe;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VisibleTodosPipe = (function () {
                function VisibleTodosPipe() {
                }
                VisibleTodosPipe.prototype.transform = function (todos, args) {
                    if (lang_1.isBlank(args) || args.length == 0) {
                        throw new exceptions_1.BaseException('VisibleTodos pipe requires one argument');
                    }
                    if (lang_1.isPresent(todos) && !lang_1.isArray(todos)) {
                        throw new exceptions_1.BaseException('VisibleTodos pipe requires an Array as input');
                    }
                    return this.getVisibleTodos(todos, args[0]);
                };
                VisibleTodosPipe.prototype.getVisibleTodos = function (todos, filter) {
                    switch (filter) {
                        case 'SHOW_ACTIVE':
                            return todos.filter(function (t) { return !t.completed; });
                        case 'SHOW_COMPLETED':
                            return todos.filter(function (t) { return t.completed; });
                        case 'SHOW_ALL':
                        default:
                            return todos;
                    }
                };
                ;
                VisibleTodosPipe = __decorate([
                    core_1.Pipe({
                        name: 'visibleTodos'
                    }), 
                    __metadata('design:paramtypes', [])
                ], VisibleTodosPipe);
                return VisibleTodosPipe;
            })();
            exports_1("VisibleTodosPipe", VisibleTodosPipe);
        }
    }
});

//# sourceMappingURL=visibleTodosPipe.js.map
