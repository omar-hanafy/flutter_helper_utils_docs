---
title: Color Extension
---

# Color Extension

## `toHex`

Converts a `Color` object to its hex string representation.

```dart
final color = Colors.blue;
final hexString = color.toHex();
```

## `toColor`

Converts a hex color string to a `Color` object. Returns `null` if the string is not a valid hex color.

```dart
final color = '#FF5733'.toColor;
```

## `isHexColor`

Checks if the given string is a valid hexadecimal color string.

```dart
final isValid = '#FF5733'.isHexColor;
```

