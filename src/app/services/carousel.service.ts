import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ResourceData} from '../models/resource-data.model';
import {Image} from '../models/image.model';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private static get_carousel_images_url = '/v1/api/carousel'

  constructor(private http: HttpClient) {}

  public getImages(limit: number = 5): Observable<ResourceData<Image[]>> {
    const params = new HttpParams().set('limit', limit);
    return this.http.get<ResourceData<Image[]>>(
      `${environment.apiUrl}${CarouselService.get_carousel_images_url}`, { params });
  }
}
