import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex-components',
  templateUrl: './complex-components.component.html',
  styleUrls: ['./complex-components.component.scss']
})
export class ComplexComponentsComponent implements OnInit {

  comment:any;
  constructor() { }

  ngOnInit(): void {
    this.comment = {
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

}
