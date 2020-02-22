"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this._finalResult = 0;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Play.prototype.DisplayResult = function () {
            this.removeChild(this._resultLabel);
            this._resultLabel = new objects.Label("Result: " + this._finalResult, "25px", "Consolas", "#DC143C", 320, 50, true);
            this.addChild(this._resultLabel);
        };
        Play.prototype.GetDiceResult = function () {
            var dice1Result = util.Mathf.RandomRange(1, 5);
            var dice2Result = util.Mathf.RandomRange(1, 5);
            switch (Math.round(dice1Result)) {
                case 1:
                    {
                        this._finalResult += 1;
                        this.removeChild(this._dice1);
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("1"), 200, 200, true);
                        this.addChild(this._dice1);
                        break;
                    }
                case 2:
                    {
                        this._finalResult += 2;
                        this.removeChild(this._dice1);
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("2"), 200, 200, true);
                        this.addChild(this._dice1);
                        break;
                    }
                case 3:
                    {
                        this._finalResult += 3;
                        this.removeChild(this._dice1);
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("3"), 200, 200, true);
                        this.addChild(this._dice1);
                        break;
                    }
                case 4:
                    {
                        this._finalResult += 4;
                        this.removeChild(this._dice1);
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("4"), 200, 200, true);
                        this.addChild(this._dice1);
                        break;
                    }
                case 5:
                    {
                        this._finalResult += 5;
                        this.removeChild(this._dice1);
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("5"), 200, 200, true);
                        this.addChild(this._dice1);
                        break;
                    }
                case 6:
                    {
                        this._finalResult += 6;
                        this.removeChild(this._dice1);
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("6"), 200, 200, true);
                        this.addChild(this._dice1);
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
            ;
            switch (Math.round(dice2Result)) {
                case 1:
                    {
                        this._finalResult += 1;
                        this.removeChild(this._dice2);
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("1"), 450, 200, true);
                        this.addChild(this._dice2);
                        break;
                    }
                case 2:
                    {
                        this._finalResult += 2;
                        this.removeChild(this._dice2);
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("2"), 450, 200, true);
                        this.addChild(this._dice2);
                        break;
                    }
                case 3:
                    {
                        this._finalResult += 3;
                        this.removeChild(this._dice2);
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("3"), 450, 200, true);
                        this.addChild(this._dice2);
                        break;
                    }
                case 4:
                    {
                        this._finalResult += 4;
                        this.removeChild(this._dice2);
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("4"), 450, 200, true);
                        this.addChild(this._dice2);
                        break;
                    }
                case 5:
                    {
                        this._finalResult += 5;
                        this.removeChild(this._dice2);
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("5"), 450, 200, true);
                        this.addChild(this._dice2);
                        break;
                    }
                case 6:
                    {
                        this._finalResult += 6;
                        this.removeChild(this._dice2);
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("6"), 450, 200, true);
                        this.addChild(this._dice2);
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
            ;
            console.log("rolled");
            this.DisplayResult();
            this._finalResult = 0;
        };
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this._resultLabel = new objects.Label("Result: ", "25px", "Consolas", "#DC143C", 320, 50, true);
            // buttons
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 370, true);
            this._newLevelButton = new objects.Button(config.Game.ASSETS.getResult("nextButton"), 320, 450, true);
            this._dice1 = new objects.Button(config.Game.ASSETS.getResult("blank"), 200, 200, true);
            this._dice2 = new objects.Button(config.Game.ASSETS.getResult("blank"), 450, 200, true);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this._resultLabel);
            this.addChild(this._rollButton);
            this.addChild(this._newLevelButton);
            this.addChild(this._dice1);
            this.addChild(this._dice2);
            this._rollButton.on("click", function () { _this.GetDiceResult(); });
            this._newLevelButton.on("click", function () {
                config.Game.SCENE = scenes.State.NEWLEVEL;
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map