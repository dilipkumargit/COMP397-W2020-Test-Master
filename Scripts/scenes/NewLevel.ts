module scenes
{
    export class NewLevel extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _resultLabel: objects.Label;
        private _rollButton: objects.Button;
        private _dice1: objects.Button;
        private _dice2: objects.Button;
        private _dice3: objects.Button;
        private _dice4: objects.Button;

        private _finalResult = 0;
        private _minResult =0;
        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS
        private DisplayResult():void
        {
            this.removeChild(this._resultLabel);
            this._resultLabel=new objects.Label("Result: "+this._finalResult, "25px", "Consolas", "#DC143C", 320, 50 , true);
            this.addChild(this._resultLabel);
        }

        private GetDiceResult():void
        {
            let dice1Result = util.Mathf.RandomRange(1,5);       
            this._minResult=Math.round(dice1Result);
            let dice2Result = util.Mathf.RandomRange(1,5);
            if(this._minResult> Math.round(dice2Result))
            {
                this._minResult=Math.round(dice2Result);
            }
            let dice3Result = util.Mathf.RandomRange(1,5);
            if(this._minResult> Math.round(dice3Result))
            {
                this._minResult=Math.round(dice3Result);
            }
            let dice4Result = util.Mathf.RandomRange(1,5);
            if(this._minResult> Math.round(dice4Result))
            {
                this._minResult=Math.round(dice4Result);
            }
            switch(Math.round(dice1Result))
            {
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

            };


            switch(Math.round(dice2Result))
            {
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


            };
            switch(Math.round(dice3Result))
            {
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

            };

            switch(Math.round(dice4Result))
            {
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

            };
            console.log("rolled");
            this._finalResult -= this._minResult;
            this.DisplayResult();
            this._finalResult=0;
            this._minResult=0;
        }
        // PUBLIC METHODS


        //initialize and instatiate
        public Start(): void 
        {
            
            //instantiate a new Text object
            this._resultLabel = new objects.Label("Result: ", "25px", "Consolas", "#DC143C", 320, 50 , true);
            // buttons
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 370, true);
            this._dice1 = new objects.Button(config.Game.ASSETS.getResult("blank"), 100, 100, true);
            this._dice2 = new objects.Button(config.Game.ASSETS.getResult("blank"), 540, 100, true);
            this._dice3 = new objects.Button(config.Game.ASSETS.getResult("blank"), 100, 360, true);
            this._dice4 = new objects.Button(config.Game.ASSETS.getResult("blank"), 540, 360, true);
            
             this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {
     
            this.addChild(this._resultLabel);

        
            this.addChild(this._rollButton);
            this.addChild(this._dice1);
            this.addChild(this._dice2);
            this.addChild(this._dice3);
            this.addChild(this._dice4);

            this._rollButton.on("click", ()=>{this.GetDiceResult()});
           
        }

        
    }
}