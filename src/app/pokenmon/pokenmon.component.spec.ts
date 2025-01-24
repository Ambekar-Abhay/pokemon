import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PokenmonComponent } from './pokenmon.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedService } from '../shared.service';

fdescribe('PokenmonComponent', () => {
  let component: PokenmonComponent;
  let fixture: ComponentFixture<PokenmonComponent>;
  let sharedService: SharedService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokenmonComponent, HttpClientModule, HttpClientTestingModule],
      providers: [SharedService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PokenmonComponent);
    component = fixture.componentInstance;
    sharedService = TestBed.inject(SharedService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should check selection and should increament counter', () => {
    component.name = 'paras'
    component.checkSelection('paras')
    expect(component.counter()).toEqual(1)
  });


});
