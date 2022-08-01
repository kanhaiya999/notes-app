export class Notes {
      public title: string;
      public body: string;
      public date: Date;
      public id?; string;

      constructor(title: string, body: string, date: Date) {
            this.title = title;
            this.body = body;
            this.date = date;
      }
}