import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MorePage } from '../more/more';
import { HistoryPage } from '../history/history';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = HistoryPage;
  tab4Root = MorePage;

  constructor() {

  }
}
