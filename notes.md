## Assets
### General Asset type
Webpack decides either to go `asset/resource` or `asset/inline` based on the file size. This threshold file size can be modified via parser -> dataUrlCondition -> maxSize value

### Asset/resouce
Asset will be kept in a separate file

### Asset/inline
Asset will be imported inside the file and merged in the code. Inlines into the bundle as a data URI

### Asset/source
Asset will be imported as a JS string

