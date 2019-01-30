import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../shared/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header:String = 'Header'

  constructor(private route: ActivatedRoute, private headerService: HeaderService) { }

  ngOnInit() {
        
  }

}
