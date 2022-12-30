import { AppComponent } from "./app.component";
import { LoggerService } from 'my-logger';
describe('AppComponent', ()=> {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent(new LoggerService);


  })
it('should have a tittle foodappangular', () => {
  expect(fixture.title).toEqual('foodappangular');
})

})