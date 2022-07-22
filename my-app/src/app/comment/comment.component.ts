import { Component, EventEmitter, Input, Output, VERSION } from '@angular/core';

@Component({
  selector: 'my-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  @Input()
  comment: any;

  @Output()
  onReply: any = new EventEmitter();

  ngOnInit() {
    console.log(this.comment);
  }

  handleReply($event:any) {
    console.log(this.comment);
    this.onReply.emit(this.comment);
  }
}
