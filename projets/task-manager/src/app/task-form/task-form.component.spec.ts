import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskDraft } from '../task.model';
import { TaskFormComponent } from './task-form.component';

describe('TaskFormComponent', () => {
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [TaskFormComponent] });
    fixture = TestBed.createComponent(TaskFormComponent);
    fixture.detectChanges();
  });

  it('désactive le bouton lorsque le titre est trop court', () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('#task');
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button[type="submit"]');

    input.value = 'ab';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(button.disabled).toBe(true);
  });

  it('affiche une erreur après interaction avec un titre invalide', () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('#task');

    input.value = 'ab';
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('au moins 3 caractères');
  });

  it('émet les données lorsque le formulaire est valide', () => {
    let savedTask: TaskDraft | undefined;
    fixture.componentInstance.taskSaved.subscribe((task) => savedTask = task);

    const input: HTMLInputElement = fixture.nativeElement.querySelector('#task');
    const select: HTMLSelectElement = fixture.nativeElement.querySelector('#priority');
    const form: HTMLFormElement = fixture.nativeElement.querySelector('form');

    input.value = 'Tester le formulaire';
    input.dispatchEvent(new Event('input'));
    select.value = 'high';
    select.dispatchEvent(new Event('change'));
    form.dispatchEvent(new Event('submit'));

    expect(savedTask).toEqual({ title: 'Tester le formulaire', priority: 'high' });
  });
});
