import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  async function setup() {
    const { fixture } = await render(AppComponent);
    return {
      fixture,
      component: fixture.componentInstance,
    };
  }

  it('should create the app', async () => {
    const { component } = await setup();
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-jest-demo'`, async () => {
    const { component } = await setup();
    expect(component.title).toBe('angular-jest-demo');
  });

  it('should render title', async () => {
    await setup();
    expect(screen.getByTestId('app-title').textContent).toBe(
      'angular-jest-demo app is running!'
    );
  });
});
