# extensible-angular-app
Extensible AngularJS Architecture.

This project demonstrates the concepts I presented in my talk at the ng-conf Israel, May 17th, 2015.
You can find the slides [here](https://goo.gl/5mQUmV).

generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview. in order to select the wanted app, provide this task a target/ 
the default target is: 'health'. For example to run the restaurants app, run `grunt serve:restaurant`.

## Deploy
Update `Gruntfile.js` and specify your target server (currently Heroku is supported), once you configured grunt, run `grunt deploy:target`.

## Testing

Running `grunt test` will run the unit tests with karma.

## Live examples

* [HealthApp](http://ext-app-health.herokuapp.com)
* [RestaurantApp](http://ext-app-restaurant.herokuapp.com)
