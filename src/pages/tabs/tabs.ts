import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MorePage } from '../more/more';
import { HistoryPage } from '../history/history';
import { UserProvider } from '../../providers/user/user';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root:any;
  tab2Root:any;
  tab3Root:any;
  tab4Root:any;
  tabsDisplay:any = false;
  constructor(public userProvider: UserProvider) {
    console.log(localStorage.getItem('usertype'));
    if(localStorage.getItem('usertype') == 'basic'){
      this.tabsDisplay = true;
      this.tab1Root = HomePage;
      this.tab2Root = SearchPage;
      this.tab3Root = HistoryPage;
      this.tab4Root = MorePage;      
    }else{
      this.tabsDisplay = true;
      this.tab1Root = DashboardPage;
      this.tab2Root = SearchPage;
      this.tab3Root = HistoryPage;
      this.tab4Root = MorePage;
      
    }
  }
  ionViewDidLoad(){
    console.log(localStorage.getItem('usertype'));
  }
}
