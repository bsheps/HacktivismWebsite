
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationSchematicComponent } from './navigation-schematic.component';

describe('NavigationSchematicComponent', () => {
  let component: NavigationSchematicComponent;
  let fixture: ComponentFixture<NavigationSchematicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [NavigationSchematicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationSchematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
