module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
 
        private _resultLabel: objects.Label;
        private _rollButton: objects.Button;
        private _dice1: objects.Button;
        private _dice2: objects.Button;
        private _newLevelButton: objects.Button;

        private _finalResult = 0;
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
            let dice2Result = util.Mathf.RandomRange(1,5);
            switch(Math.round(dice1Result))
            {
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

            };

            switch(Math.round(dice2Result))
            {
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


            };
            console.log("rolled");
            this.DisplayResult();
            this._finalResult=0;
        }
        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
            
            this._resultLabel = new objects.Label("Result: ", "25px", "Consolas", "#DC143C", 320, 50 , true);
            // buttons
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 370, true);
            this._newLevelButton = new objects.Button(config.Game.ASSETS.getResult("nextButton"), 320, 450, true);
            this._dice1 = new objects.Button(config.Game.ASSETS.getResult("blank"), 200, 200, true);
            this._dice2 = new objects.Button(config.Game.ASSETS.getResult("blank"), 450, 200, true);
       
            
             this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {
            this.addChild(this._resultLabel);

        
            this.addChild(this._rollButton);
            this.addChild(this._newLevelButton);
            this.addChild(this._dice1);
            this.addChild(this._dice2);

            this._rollButton.on("click", ()=>{this.GetDiceResult()});
            this._newLevelButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.NEWLEVEL;
            });

        }

        
    }
}