
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavvComponent } from './navv.component';

describe('NavvComponent', () => {
  let component: NavvComponent;
  let fixture: ComponentFixture<NavvComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [NavvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
