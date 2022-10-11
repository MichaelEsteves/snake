function snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.tail = [];

    this.update = function () {
        if(this.tail.length > 0){
            this.tail[this.tail.length-1].x = this.x;
            this.tail[this.tail.length-1].y = this.y;
            
            for(var i = 0; i < this.tail.length-1; i++){
                this.tail[i].x = this.tail[i+1].x;
                this.tail[i].y = this.tail[i+1].y;
            }
        }
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    this.show = function () {
        if(this.x === -1 && this.xspeed < 0){
            this.x = cols-1;
        }
        if(this.x === cols && this.xspeed == 1){
            this.x = 0;
        }
        if(this.y === rows && this.yspeed == 1){
            this.y = 0;
        }
        if(this.y === -1 && this.yspeed < 0){
            this.y = rows-1;
        }
        fill(255);
        rect(floor(this.x*scl), floor(this.y*scl), scl, scl);
        fill(210);
        this.drawTail();
    }
    
    this.drawTail = function(){
        for(var i = 0; i < this.tail.length; i++){
            rect(floor(this.tail[i].x*scl), floor(this.tail[i].y*scl), scl, scl);
        }
    }
    
    this.ateFood = function(){
        if(this.x == food.x && this.y == food.y){
            this.tail.unshift({
               x: this.x-this.xspeed,
               y: this.y-this.yspeed
            });
            score.update();
            
            if(score.score % 2){
                fps++;
            }
            return true;
        }else{
            return false;
        }
    }
    
    this.dead = function(){
        var dead = false;
        for(var i = 0; i < this.tail.length; i++){
            if(this.tail[i].x == this.x && this.tail[i].y == this.y){
                dead = true;
                score.reset();
            }
        }
        return dead;
    }
    
}