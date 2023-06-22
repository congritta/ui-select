# @congritta-ui/select

This is 'select' React component and part of [Congritta UI](https://ui.congritta.com)

## How to install

1. Install `@congritta-ui/base` if you didn't it yet. (More info at: http://ui.congritta.com/docs/base);
2. Install `@congritta-ui/select`;

Add

```javascript
import Select from '@congritta-ui/select';
```

into your code

## How to use

Example:

```jsx
export default function MyComponentWidthSelect() {
  const [value, setValue] = useState('a');

  return (
    <Select value={value} onChange={setValue} options={[
      {value: 'a', element: 'Item A'},
      {value: 'b', element: 'Item B'},
      {value: 'c', element: 'Item C'},
      {value: 'd', element: 'Item D'},
      {value: 'e', element: 'Item E'},
      {value: 'f', element: 'Item F'},
    ]} />
  )
}
```

### Props

| Prop name                           | Description                                                                                                                                                          | Is Required | Default value                 |
|-------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------------------|
| value                               | Active value                                                                                                                                                         | true        |                               |
| options                             | Array of objects. `value` propetry is unique value key (like value in regular HTML), `element` property is a string or JSX component that is visible in options list | true        |                               |
| onChange                            | Function that executes when user select an option in options list                                                                                                    | true        |                               |
| transitionDuration                  | Duration in milliseconds to reveal or close options list                                                                                                             | false       | `210`                         |
| optionHeight                        | Height of an option in options list (in pixels)                                                                                                                      | false       | `35`                          |
| gapBetweenSelectedOptionAndList     | Gap between selected option and options list (in pixels)                                                                                                             | false       | `10`                          |
| wrapperClassName                    | Class name for Select component wrapper for adding additional styles                                                                                                 | false       |                               |
| selectedOptionClassName             | Class name for selected option for adding additional styles                                                                                                          | false       |                               |
| wrapperClassName                    | Class name for Select component wrapper for adding additional styles                                                                                                 | false       |                               |
| optionsListClassName                | Class name for options list for adding additional styles                                                                                                             | false       |                               |
| notchIcon                           | SVG Element about arrow icon at the right                                                                                                                            | false       |                               |
