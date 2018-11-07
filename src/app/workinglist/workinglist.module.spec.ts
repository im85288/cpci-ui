import { WorkinglistModule } from './workinglist.module';

describe('WorkinglistModule', () => {
  let workinglistModule: WorkinglistModule;

  beforeEach(() => {
    workinglistModule = new WorkinglistModule();
  });

  it('should create an instance', () => {
    expect(workinglistModule).toBeTruthy();
  });
});
