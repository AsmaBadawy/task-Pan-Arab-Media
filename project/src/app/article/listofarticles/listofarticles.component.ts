import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/article/article.service';
import { nanoid } from 'nanoid'
@Component({
  selector: 'app-listofarticles',
  templateUrl: './listofarticles.component.html',
  styleUrls: ['./listofarticles.component.css']
})
export class ListofarticlesComponent implements OnInit {
 articles:any;
 array:any;
 lastestnews:any;
 recents:any;
 populars:any;
 tendposts:any;
  constructor(private articleSerices:ArticleService,
    private router:Router) { }

  ngOnInit(): void {
    this.getListOfArticles();
  }
  getListOfArticles() {
    this.articleSerices.getarticle().subscribe((res: any) => {
      this.articles = res.articles;
      this.articles.sort(function (a: any, b: any) {
        return (
          new Date(a.publishedAt).getTime() -
          new Date(b.publishedAt).getTime()
        );
      });
      this.lastestnews=this.articles.slice(0, 2);
      this.recents=this.articles.slice(0, 3);
      this.populars=this.articles.slice(0, 5);
      this.tendposts=this.articles.slice(0, 4);
    });
  
  }
  detail(post:any)
  {
    localStorage.setItem('post',  JSON.stringify(post));
    this.router.navigate(['detailarticle'])
  }
}
