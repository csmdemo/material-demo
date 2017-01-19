/**
 * @ngInject
 */
export class AppComponent {
  // Define our AppComponent's name
  static componentName:string = "msApp";

  // Define our AppComponent's config
  static componentConfig:ng.IComponentOptions = {
    bindings: {},
    controller: AppComponent,
    templateUrl: 'src/components/start-app/start-app.component.html'
  };

  // Define our injectables
  private $mdSidenav:angular.material.ISidenavService;

  // Define our constructor and inject the necessary services
  constructor($mdSidenav:angular.material.ISidenavService) {
    // Store all of our injectables
    this.$mdSidenav = $mdSidenav;
  }  
}
