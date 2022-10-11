
function score(){
    this.score = 0;
    this.highscore = 0;
    
    
    this.update = function(){
        this.score += 1;
        if(this.score > this.highscore){
            this.highscore = this.score;
        }
        document.getElementById("current-score").innerHTML = this.score;
        document.getElementById("high-score").innerHTML = this.highscore;
    }
    
    this.reset = function(){
        this.score = 0;
        this.update();
    }
    
}