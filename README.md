## Grid system

All pages within the Sotheby's domain should follow the [grid system defined in figma](https://www.figma.com/file/VbsWInV1sYOGiNuWI9zu5u/Core?node-id=21%3A32). To help developers follow the grid system, grid.css contains classes that can easily be applied to certain elements in the dom for a responsive grid that follows the designs.

The grid system dimensions are as follows:

| Size (px)   | Columns | Margin (px) | Gutter (px) |
| ----------- | :-----: | :---------: | :---------: |
| 1440 - 1025 |   12    |     64      |     24      |
| 1024 - 769  |    8    |     64      |     24      |
| 768 - 600   |    8    |     32      |     24      |
| 599 - x     |    4    |     16      |     16      |

---

### Styles

The lowest level layout component should have the class `gridContainer` (or [gridFreeContainer](####gridFreeContainer) for more freedom) which adds a margin to either side of the site content. Below it there can be an element with the class `gridSidebar` if a sidebar should be displayed on the page and then one or more elements with the class `gridContent` or `rowContent`. A page including a sidebar could have the following structure:

```
<div class="gridContainer">
  <div class="gridSidebar">...</div>
  <div class="rowContent"><div class="row">...</div></div>
  <div class="gridContent">...</div>
</div>
```

This would look like the following:

```
_____________________
|SSSS|RRRR|RRRR|RRRR|
|SSSS|GGGG|GGGG|GGGG|
|SSSS|GGGG|GGGG|GGGG|
```

where

```
S = Sidebar
R = RowContent
G = GridContent
```

Note that the maximum width of the grid (sidebar + content) is 1440px. For displays larger we will center the grid and add margins.

The value set for the small screen size will be the default for all screen sizes if no class is specified for that size.

For the sizes 768px and down the sidebar will not be visible but should be implemented as a side drawer.

#### Using gridContent

If your use case is a list of items in a grid you should use `gridContent` as a wrapper around your items.
To place your items use the classes `col[screen-size]Span[column-count]` and `col[screen-size]Start[column]` where [screen-size] is

`XLarge` for 1025px - up

`Large` for 769px - 1024px

`Medium` for 600px - 768px

`Small` for 0px - 599px

[column-count] is the number of columns the element should span.

[column] is the column where the element should start within the line.

For an example an element with the classes `colSmallSpan3` and `colSmallStart2` would be cover columns 2, 3 and 4 in the following grid.

```
_____________________
|    |XXXX|XXXX|XXXX|
|    |XXXX|XXXX|XXXX|
|____|XXXX|XXXX|XXXX|
```

#### Using rowContent

In most cases `rowContent` will be used. When using it you'll need to wrap your content into rows and you can have a specific column layout within each row. For item placements you can use the classes `col[screen-size]Span[column-count]` and `col[screen-size]Offset[column-count]` where `[screen-size]` is the same as above. For an example, to achieve this layout:

```
_____________________
|XXXX|    |XXXX|XXXX|
|    |XXXX|XXXX|    |
```

your code would look like:

```
<div class="gridContainer">
  <div class="rowContent">
    <div class="row">
      <div class="colSmallSpan1">
      <div class="colSmallSpan2 colSmallOffset1">
    </div>
    <div class="row">
      <div class="colSmallSpan2 colSmallOffset1">
    </div>
  </div>
</div>
```

#### gridFreeContainer

If you want more control and only want the outer margin, you can use the gridFreeContainer to wrap your content
