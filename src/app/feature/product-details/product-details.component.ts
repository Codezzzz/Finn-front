import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../core/login/auth';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { SpinnerService } from '../../shared/spinner/spinner.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  url = `${environment.apiUrl}`;
  constructor(public auth: AuthService,
    private http: HttpClient,
    public spinner: SpinnerService,
    private route: ActivatedRoute) {  }
  img_profile: any;
  value: any;
  user: any;
  zoom = 15;
  pk: number;
// 위도 경도 값
  latitude: number;
  longitude: number;
  ngOnInit() {
    this.user = this.auth.getUser();
    this.spinner.show();
// pk 값 url 에서 받아오기
    this.route.params
    .subscribe(res => this.pk = +res.pk);
    this.img_check();
  }
  // house 정보 받아오기 pk 값에 따라서
  img_check() {
    this.http.get<any>(`${this.url}house/${this.pk}`)
      .subscribe(res => {
        if (res.host.images[1] == null) {
          this.img_profile = '../../../assets/img/defaultProfileImg.png';
          this.latitude = +res.latitude;
          this.longitude = +res.longitude;
          this.spinner.hide();
        } else {
          this.img_profile = (res.host.images[1]);
        }
        this.value = res;
        console.log(this.value);
        console.log(this.value.img_cover_400_300);
        this.spinner.hide();
      });
  }
}
