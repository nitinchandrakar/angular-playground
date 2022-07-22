import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  comment = {
    id: 1,
    text: 'Main Comment',
    reply: [
      {
        id: 11,
        text: 'Reply 1',
        reply: [
          {
            id: 111,
            text: 'Reply 1 1',
            reply: [
              {
                id: 1111,
                text: 'Reply 2',
              },
              {
                id: 1112,
                text: 'Reply 2',
              },
            ],
          },
        ],
      },
      {
        id: 12,
        text: 'Reply 2',
      },
    ],
  };
}
