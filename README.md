## Legacy Team

### Getting Started

Run ```bundle install``` to install the gems
Run ```bower install``` to install the front-end libraries

Run ```rails s``` to launch the server


### Angular File System

All the work files for the **front-end** are located in ```/app/assets```
List of routes and directives in ```/app/assets/angular/app.js.erb```
Controllers in ```/app/assets/angular/controllers/```
Templates in ```/app/assets/templates/```
Stylesheets in ```/app/assets/stylesheets/```

NB: after adding a new css file ```my-file```, you should add ```@import "my-file";``` at the end of ```application.css.scss```

NB: use ```<img ng-src="<%= asset_path('my-image.jpg') %>"``` to add an image (stored in ```/app/assets/images/```)

### Push to Heroku

Add the remote ```https://git.heroku.com/legacy-team.git```
Run ```git push heroku master``` to push new version
Run ```heroku open``` to launch the website
