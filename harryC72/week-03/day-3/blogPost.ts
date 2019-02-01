

export class BlogPost{
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;

  constructor(author, postTitle, publishedDate){
    this.authorName = author;
    this.title = postTitle;
    this.publicationDate = publishedDate;

  }


}

export let blogPost1 = new BlogPost('John Doe', 'Lorem Ipsum', '2000.05.05');
blogPost1.text =  'Lorem ipsum dolor sit amet.';

export let blogPost2 = new BlogPost('Tim Urban', 'Wait by why', '2010.10.10');
blogPost2.text =  'A popular long-form, stick-figure-illustrated blog about almost everything.'+
'/"One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28./"'+
'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When'+
 'I asked to take his picture outside one of IBM’s New York City offices, he told me that he' +
  'wasn’t really into the whole organizer profile thing.'
