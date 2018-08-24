# 0.0.11

- **Breaking**: Simplified the API for creating a singular store.

```js
// before
import { createSingularContainer } from 'qaf';

const { SingularStore, Subscriber, subscribe } = createSingularContainer();

// after
import { createContainer } from 'qaf';

const { SingularStore, Subscriber, subscribe } = createContainer({
  singular: true
});
```

# 0.0.10

- Introduce singular containers.

# 0.0.9

- Add Typescript definitions.

# 0.0.8

- Introduce containers.
- Rename `<Subscribe />` to `<Subscriber />`.

# 0.0.4

- Update build.

# 0.0.3

- Prevent possible unintentional renders.
- Actions must be referenced in the state now.
- Computed values are no longer getters (just regular functions).
- Use Rollup to build the library.

# 0.0.1

- Initial release.
