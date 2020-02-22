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
    var NewLevel = /** @class */ (function (_super) {
        __extends(NewLevel, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function NewLevel() {
            var _this = _super.call(this) || this;
            _this._finalResult = 0;
            _this._minResult = 0;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        NewLevel.prototype.DisplayResult = function () {
            this.removeChild(this._resultLabel);
            this._resultLabel = new objects.Label("Result: " + this._finalResult, "25px", "Consolas", "#DC143C", 320, 50, true);
            this.addChild(this._resultLabel);
        };
        NewLevel.prototype.GetDiceResult = function () {
            var dice1Result = util.Mathf.RandomRange(1, 5);
            this._minResult = Math.round(dice1Result);
            var dice2Result = util.Mathf.RandomRange(1, 5);
            if (this._minResult > Math.round(dice2Result)) {
                this._minResult = Math.round(dice2Result);
            }
            var dice3Result = util.Mathf.RandomRange(1, 5);
            if (this._minResult > Math.round(dice3Result)) {
                this._minResult = Math.round(dice3Result);
            }
            var dice4Result = util.Mathf.RandomRange(1, 5);
            if (this._minResult > Math.round(dice4Result)) {
                this._minResult = Math.round(dice4Result);
            }
            switch (Math.round(dice1Result)) {
                case 1:
                    {
                        this._finalResult += 1;
                        this.removeChild(this._dice1);
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("1"), 100, 100, true);
                        this.addChild(this._dice1);
                        break;
                    }
                case 2:
                    {
                        this._finalResult += 2;
                        this.removeChild(this._dice1);
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("2"), 100, 100, true);
                        this.addChild(this._dice1);
                        break;
                    }
                case 3:
                    {
                        this._finalResult += 3;
                        this.removeChild(this._dice1);
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("3"), 100, 100, true);
                        this.addChild(this._dice1);
                        break;
                    }
                case 4:
                    {
                        this._finalResult += 4;
                        this.removeChild(this._dice1);
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("4"), 100, 100, true);
                        this.addChild(this._dice1);
                        break;
                    }
                case 5:
                    {
                        this._finalResult += 5;
                        this.removeChild(this._dice1);
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("5"), 100, 100, true);
                        this.addChild(this._dice1);
                        break;
                    }
                case 6:
                    {
                        this._finalResult += 6;
                        this.removeChild(this._dice1);
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("6"), 100, 100, true);
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
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("1"), 540, 100, true);
                        this.addChild(this._dice2);
                        break;
                    }
                case 2:
                    {
                        this._finalResult += 2;
                        this.removeChild(this._dice2);
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("2"), 540, 100, true);
                        this.addChild(this._dice2);
                        break;
                    }
                case 3:
                    {
                        this._finalResult += 3;
                        this.removeChild(this._dice2);
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("3"), 540, 100, true);
                        this.addChild(this._dice2);
                        break;
                    }
                case 4:
                    {
                        this._finalResult += 4;
                        this.removeChild(this._dice2);
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("4"), 540, 100, true);
                        this.addChild(this._dice2);
                        break;
                    }
                case 5:
                    {
                        this._finalResult += 5;
                        this.removeChild(this._dice2);
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("5"), 540, 100, true);
                        this.addChild(this._dice2);
                        break;
                    }
                case 6:
                    {
                        this._finalResult += 6;
                        this.removeChild(this._dice2);
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("6"), 540, 100, true);
                        this.addChild(this._dice2);
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
            ;
            switch (Math.round(dice3Result)) {
                case 1:
                    {
                        this._finalResult += 1;
                        this.removeChild(this._dice3);
                        this._dice3 = new objects.Button(config.Game.ASSETS.getResult("1"), 100, 360, true);
                        this.addChild(this._dice3);
                        break;
                    }
                case 2:
                    {
                        this._finalResult += 2;
                        this.removeChild(this._dice3);
                        this._dice3 = new objects.Button(config.Game.ASSETS.getResult("2"), 100, 360, true);
                        this.addChild(this._dice3);
                        break;
                    }
                case 3:
                    {
                        this._finalResult += 3;
                        this.removeChild(this._dice3);
                        this._dice3 = new objects.Button(config.Game.ASSETS.getResult("3"), 100, 360, true);
                        this.addChild(this._dice3);
                        break;
                    }
                case 4:
                    {
                        this._finalResult += 4;
                        this.removeChild(this._dice3);
                        this._dice3 = new objects.Button(config.Game.ASSETS.getResult("4"), 100, 360, true);
                        this.addChild(this._dice3);
                        break;
                    }
                case 5:
                    {
                        this._finalResult += 5;
                        this.removeChild(this._dice3);
                        this._dice3 = new objects.Button(config.Game.ASSETS.getResult("5"), 100, 360, true);
                        this.addChild(this._dice3);
                        break;
                    }
                case 6:
                    {
                        this._finalResult += 6;
                        this.removeChild(this._dice3);
                        this._dice3 = new objects.Button(config.Game.ASSETS.getResult("6"), 100, 360, true);
                        this.addChild(this._dice3);
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
            ;
            switch (Math.round(dice4Result)) {
                case 1:
                    {
                        this._finalResult += 1;
                        this.removeChild(this._dice4);
                        this._dice4 = new objects.Button(config.Game.ASSETS.getResult("1"), 540, 360, true);
                        this.addChild(this._dice4);
                        break;
                    }
                case 2:
                    {
                        this._finalResult += 2;
                        this.removeChild(this._dice4);
                        this._dice4 = new objects.Button(config.Game.ASSETS.getResult("2"), 540, 360, true);
                        this.addChild(this._dice4);
                        break;
                    }
                case 3:
                    {
                        this._finalResult += 3;
                        this.removeChild(this._dice4);
                        this._dice4 = new objects.Button(config.Game.ASSETS.getResult("3"), 540, 360, true);
                        this.addChild(this._dice4);
                        break;
                    }
                case 4:
                    {
                        this._finalResult += 4;
                        this.removeChild(this._dice4);
                        this._dice4 = new objects.Button(config.Game.ASSETS.getResult("4"), 540, 360, true);
                        this.addChild(this._dice4);
                        break;
                    }
                case 5:
                    {
                        this._finalResult += 5;
                        this.removeChild(this._dice4);
                        this._dice4 = new objects.Button(config.Game.ASSETS.getResult("5"), 540, 360, true);
                        this.addChild(this._dice4);
                        break;
                    }
                case 6:
                    {
                        this._finalResult += 6;
                        this.removeChild(this._dice4);
                        this._dice4 = new objects.Button(config.Game.ASSETS.getResult("6"), 540, 360, true);
                        this.addChild(this._dice4);
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
            ;
            console.log("rolled");
            this._finalResult -= this._minResult;
            this.DisplayResult();
            this._finalResult = 0;
            this._minResult = 0;
        };
        // PUBLIC METHODS
        //initialize and instatiate
        NewLevel.prototype.Start = function () {
            //instantiate a new Text object
            this._resultLabel = new objects.Label("Result: ", "25px", "Consolas", "#DC143C", 320, 50, true);
            // buttons
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 370, true);
            this._dice1 = new objects.Button(config.Game.ASSETS.getResult("blank"), 100, 100, true);
            this._dice2 = new objects.Button(config.Game.ASSETS.getResult("blank"), 540, 100, true);
            this._dice3 = new objects.Button(config.Game.ASSETS.getResult("blank"), 100, 360, true);
            this._dice4 = new objects.Button(config.Game.ASSETS.getResult("blank"), 540, 360, true);
            this.Main();
        };
        NewLevel.prototype.Update = function () {
        };
        NewLevel.prototype.Main = function () {
            var _this = this;
            this.addChild(this._resultLabel);
            this.addChild(this._rollButton);
            this.addChild(this._dice1);
            this.addChild(this._dice2);
            this.addChild(this._dice3);
            this.addChild(this._dice4);
            this._rollButton.on("click", function () { _this.GetDiceResult(); });
        };
        return NewLevel;
    }(objects.Scene));
    scenes.NewLevel = NewLevel;
})(scenes || (scenes = {}));
//# sourceMappingURL=NewLevel.js.map