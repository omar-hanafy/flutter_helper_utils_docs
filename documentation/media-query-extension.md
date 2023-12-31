---
title: MediaQuery Extension
---

# MediaQuery Extension

## mq

You can quickly access `MediaQueryData` using the following method:

```dart
final mediaQueryData = context.mq;
```

## nullableMQ

You can access `MediaQueryData` safely, and it will return `null` if not available:

```dart
final mediaQueryData = context.nullableMQ;
```

## deviceOrientation

Retrieve the device orientation, which can be either landscape or portrait:

```dart
final orientation = context.deviceOrientation;
```

## navigationMode

You can also retrieve the device's navigation mode:

```dart
final navMode = context.navigationMode;
```

## padding and viewInsets

Access the screen's padding and view insets. This is useful for accommodating elements like notches, the system status bar, or software keyboards:

```dart
final padding = context.padding;
final viewInsets = context.viewInsets;
```

## screenDimensions

Easily get the screen's width, height, shortest and longest side:

```dart
final width = context.widthPx;
final height = context.heightPx;
final shortest = context.shortestSide;
final longest = context.longestSide;
```

## additionalFeatures

You can also retrieve the device's pixel ratio, text scale factor, and accessibility settings like `boldText`, `disableAnimations`, and more directly from the context:

```dart
final pixelRatio = context.pixelRatio;
final textFactor = context.txtScaleFactor;
final isBoldText = context.boldText;
```