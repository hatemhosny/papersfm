**SvgIconModule**

Provides a component to embed inline SVG icons 

**Installation**

- `npm install --save ng-inline-svg`
- Import `SvgModule` from `@app/svg-icon`

**Usage**

- Add icons to `/assets/icons/`

- use the component:
```html
<!-- Icon name without ".svg" extension -->
  <pfm-icon icon="appstore-o" size="3em" color="darkgrey"></pfm-icon>

<!-- Icon id in SVG sprite -->
  <pfm-icon icon="sprite.svg#si-logos-alfresco"></pfm-icon>

<!-- Icon full URL -->
  <pfm-icon icon="https://raw.githubusercontent.com/hatemhosny/svg-icon/master/dist/trimmed-svg/ant/chrome.svg"></pfm-icon>
  ```

- Apply styles:
```css
::ng-deep .svg-icon {
  fill: darkgrey;
  height: 2em;
  width: 2em;
}
```

**Resources**

- https://leungwensen.github.io/svg-icon/
- https://github.com/leungwensen/svg-icon
- http://fontello.com/
- https://github.com/fontello/fontello
- https://github.com/paulyoung/fontello-cli
- http://app.fontastic.me
