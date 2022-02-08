import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransferenciaCadastrarPage } from './transferencia-cadastrar.page';

describe('TransferenciaCadastrarPage', () => {
  let component: TransferenciaCadastrarPage;
  let fixture: ComponentFixture<TransferenciaCadastrarPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferenciaCadastrarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransferenciaCadastrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
