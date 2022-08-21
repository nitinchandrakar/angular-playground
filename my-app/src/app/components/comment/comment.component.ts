import { Component, EventEmitter, Input, Output, VERSION } from '@angular/core';

@Component({
  selector: 'my-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  inputText: string = '';

  @Input()
  comment: any;

  @Output()
  onReply: any = new EventEmitter();

  ngOnInit() {
    console.log(this.comment);
  }

  handleReply($event: any) {
    if (this.inputText.trim().length == 0) {
      return;
    }

    if (this.comment.reply) {
      this.comment.reply.push({
        id: Math.random(),
        text: this.inputText,
      });
    } else {
      this.comment.reply = [
        {
          id: Math.random(),
          text: this.inputText,
        },
      ];
    }

    this.onReply.emit(this.comment);
  }
}
