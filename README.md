# Angular Universal Starter
This template is an enhanced version of the [Angular Universal Templatate](https://github.com/angular/universal-starter).  It was created to provide some additonal functionality commonly need when creating websites in Angular Universal.  The repository is continuously updated with feature improvements and updates as the original repository is updated.

## Changes In This Template
1. A Home, About, and Contact module have been created, each with their own designated routes.
2. Preloading is enabled, so all routes are loaded and cached when visiting the site for the first time.
3. Initial navigation is enabled so avoid page flashes when a user visits a newly updated version of the site.
4. `angular.json` is configured so styles and templates are used when generating a new component; Scss is also set as the default stylesheet.
5. The root of the e2e project in `angular,json` has been set to "e2e" to avoid cli issues.
6. Resources have been sharified and placed in the `src/app/shared` directory.
7. Bootstrap, font-awesome, and animate.css are included in the build process.
8. Prettier has been included for code formatting.
9. A responsive header and sidebar have been created, leveraging the ng-click-outside for mobile behavior.

## Installation
```
yarn
```

## Development (Client-side only rendering)
```
yarn start
```

## Building for Production
Add all routes to `static.path.ts`.
```
yarn build
```
*Note**: To deploy your static site to a static hosting platform you will have to deploy the `dist/browser` folder, rather than the usual `dist`

## Universal "Gotchas"
[Angular Universal Gotchas](https://github.com/angular/universal/blob/master/docs/gotchas.md)
