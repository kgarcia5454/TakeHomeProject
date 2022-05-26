import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-github-feed',
  templateUrl: './github-feed.component.html',
  styleUrls: ['./github-feed.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GithubFeedComponent implements OnInit {

  @ViewChild('Container') Bup: ElementRef;

  ngOnInit(): void {
    fetch("https://api.github.com/repos/kgarcia5454/TakeHomeProject/commits")
    .then(response => response.json())
    .then(commits =>{
      for (const commit of commits){
          let Author  = commit.commit.author.name;
          let Author_url = commit.author.html_url;
          let author_Pic = commit.author.avatar_url;
          let Message = commit.commit.message;
          let URL = commit.html_url;

          //Commit Splitter Head and body
          const messageArray = Message.split("\n\n");

          const cardContainer = document.createElement("div");
          cardContainer.className = "Cards";

          const cardHeader = document.createElement('div');
          cardHeader.className ="CardHeader";

          const cardInfo = document.createElement("div");
          cardInfo.className = "CardInfo"

          const commitAuthorPic = document.createElement("img");
          commitAuthorPic.className = "commit-ProfilePic" ;
          commitAuthorPic.src = author_Pic;


          const commitAuthor = document.createElement("h3");
          commitAuthor.className = "commit-Author";
          commitAuthor.textContent = Author;

          const commitAuthorURL = document.createElement('a');
          commitAuthorURL.href = Author_url;
          commitAuthorURL.target = "_blank";
          commitAuthorURL.appendChild(commitAuthor);

          const commitHead = document.createElement('p');
          commitHead.className = "commit-Head";
          commitHead.textContent = messageArray[0];

          const commitBody = document.createElement('p');
          commitAuthor.className = "commit-Body";
          commitBody.textContent = messageArray[1];

          cardHeader.appendChild(commitAuthorPic);
          cardHeader.appendChild(commitAuthorURL);

          cardInfo.appendChild(commitHead);
          cardInfo.appendChild(commitBody);

          cardContainer.appendChild(cardHeader);
          cardContainer.appendChild(cardInfo);


          const commitContainer = this.Bup.nativeElement;
          commitContainer.appendChild(cardContainer);

      }

    })
}}
