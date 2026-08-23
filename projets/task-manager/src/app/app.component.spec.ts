import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [AppComponent] });
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  function clickFilter(label: string): void {
    const buttons: HTMLButtonElement[] = Array.from(
      fixture.nativeElement.querySelectorAll('app-task-filter button'),
    );
    buttons.find((button) => button.textContent?.includes(label))?.click();
    fixture.detectChanges();
  }

  it('affiche toutes les tâches au démarrage', () => {
    expect(fixture.nativeElement.textContent).toContain('Lire le chapitre TypeScript');
    expect(fixture.nativeElement.textContent).toContain('Créer mon premier composant Angular');
  });

  it('filtre les tâches en cours', () => {
    clickFilter('En cours');
    expect(fixture.nativeElement.textContent).not.toContain('Lire le chapitre TypeScript');
    expect(fixture.nativeElement.textContent).toContain('Créer mon premier composant Angular');
  });

  it('filtre les tâches terminées', () => {
    clickFilter('Terminées');
    expect(fixture.nativeElement.textContent).toContain('Lire le chapitre TypeScript');
    expect(fixture.nativeElement.textContent).not.toContain('Créer mon premier composant Angular');
  });

  it('ajoute une tâche valide depuis le formulaire', () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('#task');
    const select: HTMLSelectElement = fixture.nativeElement.querySelector('#priority');
    const form: HTMLFormElement = fixture.nativeElement.querySelector('form');

    input.value = 'Apprendre les tests';
    input.dispatchEvent(new Event('input'));
    select.value = 'high';
    select.dispatchEvent(new Event('change'));
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Apprendre les tests');
  });
});
