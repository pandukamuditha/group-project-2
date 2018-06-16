import { NewProjectModule } from './new-project.module';

describe('NewProjectModule', () => {
  let newProjectModule: NewProjectModule;

  beforeEach(() => {
    newProjectModule = new NewProjectModule();
  });

  it('should create an instance', () => {
    expect(newProjectModule).toBeTruthy();
  });
});
