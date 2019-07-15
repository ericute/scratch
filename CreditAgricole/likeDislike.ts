import { Component } from '@angular/core';


@Component({
  selector: 'like-dislike',
  template: `
      <div>
        <button class="like-button" [ngClass]="liked ? 'liked' : ''" (click)="onLike()">
            Like | <span class="likes-counter">{{numberOfLikes}}</span>
        </button>
        <button class="dislike-button" [ngClass]="disliked ? 'disliked' : ''" (click)="onDislike()">
            Dislike | <span class="dislikes-counter">{{numberOfDislikes}}</span>
        </button>
      </div>
  `,
  styles: [`
    .like-button, .dislike-button {
        font-size: 1rem;
        padding: 5px 10px;
        color:   #585858;
    }

    .liked, .disliked {
        font-weight: bold;
        color: #1565c0;
    }
  `]
})

export class LikeDislikeComponent {

    numberOfLikes: number;
    liked: boolean;
    
    numberOfDislikes: number;
    disliked: boolean;
    
    ngOnInit() {
        this.numberOfLikes = 100;
        this.liked = false;
        
        this.numberOfDislikes = 25;
        this.disliked = false;
    }
    
    onLike() {
        if (!this.liked) {
            this.numberOfLikes++;
            this.liked = true;
            
            if (this.disliked) {
                this.numberOfDislikes--;
                this.disliked = false;
            }
            
        } else {
            this.numberOfLikes--;
            this.liked = false;
        }
    }
    
    onDislike() {
        
        if (!this.disliked) {
            this.numberOfDislikes++;
            this.disliked = true;
            
            if (this.liked) {
                this.numberOfLikes--;
                this.liked = false;
            }
            
        } else {
            this.numberOfDislikes--;
            this.disliked = false;
        }
        
    }

}