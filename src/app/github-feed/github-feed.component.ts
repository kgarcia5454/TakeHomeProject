import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-github-feed',
  templateUrl: './github-feed.component.html',
  styleUrls: ['./github-feed.component.scss']
})
export class GithubFeedComponent implements OnInit {

  constructor() {
  }


  ngOnInit(): void {
    fetch("https://api.github.com/repos/kgarcia5454/TakeHomeProject/commits")
    .then(response => response.json())
    .then(commits =>{
      for (const commit of commits){
          let Author  = commit.commit.author.name;
          let Author_url = commit.author.html_url;
          let Message = commit.commit.message;
          let URL = commit.html_url;

      }

    })
}}
