export class WebDevTecService {
  constructor () {
    'ngInject';

    this.data = [
      {
        category: 'Animal',
        questions: [
          {
            'title': '$100',
          },
          {
            'title': '$200',
          },
          {
            'title': '$300',
          },
          {
            'title': '$400',
          },
          {
            'title': '$500',
          }
        ]
      },
      {
        category: 'SPCA',
        questions: [
          {
            'title': '$100',
          },
          {
            'title': '$200',
          },
          {
            'title': '$300',
          },
          {
            'title': '$400',
          },
          {
            'title': '$500',
          }
        ]
      },
      {
        category: 'Kat',
        questions: [
          {
            'title': '$100',
          },
          {
            'title': '$200',
          },
          {
            'title': '$300',
          },
          {
            'title': '$400',
          },
          {
            'title': '$500',
          }
        ]
      },
      {
        category: 'I LOVE YOU',
        questions: [
          {
            'title': '$100',
          },
          {
            'title': '$200',
          },
          {
            'title': '$300',
          },
          {
            'title': '$400',
          },
          {
            'title': '$500',
          }
        ]
      },
      {
        category: 'SO MUCH',
        questions: [
          {
            'title': '$100',
          },
          {
            'title': '$200',
          },
          {
            'title': '$300',
          },
          {
            'title': '$400',
          },
          {
            'title': '$500',
          }
        ]
      }
    ];
  }

  getTec() {
    return this.data;
  }
}
