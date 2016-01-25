## Build scripts

### Generic build tasks
```gulp```
Executes default task that executes every other task.

```gulp watch```
Executes default task and watches all source files for changes and responds with correct tasks accordingly.

### Specific build tasks
```gulp js```
Builds all JS source files into an expanded bundle and a minified bundle.

```gulp scss```
Builds all SASS source files into an expanded bundle and a minified bundle.

```gulp img```
Optimizes images before they are being copied to destination folder.

```gulp clean```
Removes the entire destination folder, each individual build also has its own clean variant, using the convention ```clean:<BUILD TASK NAME>```. For example: ```clean:js``` / ```clean:css```.

```gulp font```
Copies the custom fonts from the source to the destination location.

### Optional build tasks
```gulp copy```
Copies destination folder to configured project path.

```gulp deploy```
Deploys the destination folder to a configured deploy location.

```gulp sprite```
Generates a sprite automatically from files in the sprite source folder.

```gulp lint```
Uses JSHint and JSCS to lint JS src code and PostCSS to lint SASS files.
