import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import { FakeService } from '../services/fake.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let fakeServiceMock:any;

  beforeEach(async () => {
    fakeServiceMock = {
      getDataV1: jest.fn()
    }

    await TestBed.configureTestingModule({
      declarations: [ DataComponent ],
      providers:[
        {provide: FakeService, useValue: fakeServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getServiceData set serviceData',() => {
    const expRes = {
      name: 'Jane'
    };
    jest.spyOn(fakeServiceMock,'getDataV1').mockReturnValue(of(expRes));
    fixture.detectChanges();
    expect(component.serviceData.name).toBe(expRes.name);
  });

  it('should getServiceData set errorMessage',() => {
    const errorResponse = new HttpErrorResponse({
      error:'test 404 error',
      status:400,
      statusText: 'Not Found'
    });
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(throwError(()=>errorResponse));
    component.getServiceData();
    expect(component.errorMessage).toBe('Not Found');

  });


  it.only('should greeting set Good morning',() => {
    const expRes = {
      name: 'Jane',
      time: 9
    };
    jest.spyOn(fakeServiceMock,'getDataV1').mockReturnValue(of(expRes));
    fixture.detectChanges();
    expect(component.greeting).toBe('Good morning');
  });

  it('should greeting set Good day',() => {
    const expRes = {
      name: 'Jane',
      time: 12
    };
    jest.spyOn(fakeServiceMock,'getDataV1').mockReturnValue(of(expRes));
    fixture.detectChanges();
    expect(component.greeting).toBe('Good day');
  });
  
});
