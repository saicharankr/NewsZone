import { LoadingService } from './../services/LoadingService/loading.service';
import { NewsService } from './../services/news.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { IonContent, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-india-express',
  templateUrl: './india-express.page.html',
  styleUrls: ['./india-express.page.scss'],
})
export class IndiaExpressPage implements OnInit {

  constructor(public news:NewsService,public loadingService: LoadingService) { }
  newsItems:any =[];
  pageNumber = 1;
  loading: any;
  lastPage:any;


  @ViewChild(IonContent, { static: false }) content: IonContent;
 async  ngOnInit() {
  this.getData(this.pageNumber)
  }
  public async getData(pageNumber, event?) {
    this.loadingService.present()
    await this.news.getTinNews(pageNumber).then((data) => {
      this.lastPage = data.pager.endPage;
      data.pageOfItems.forEach(element => {
        this.newsItems.push(element)
      });
    }).catch(err => {
      console.log(err)
    })
    this.loadingService.dismiss()
    if (event) {
      event.target.complete()
    }
  }
  public async loadData(event) {
    this.pageNumber++;
    
    await this.getData(this.pageNumber, event)
    
    if (this.pageNumber == this.lastPage) {
      event.target.disabled = true;
    }
  }

  doRefresh(event) {
    this.getData(this.pageNumber)
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
