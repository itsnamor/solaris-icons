# Icon Naming Conventions Guide

## Core Principles

### 1. Use Lowercase Kebab Case
Icon names use lowercase kebab case (words separated by hyphens).
- ✅ `arrow-up`
- ❌ `Arrow Up`, `ArrowUp`, `arrow_up`

### 2. Use International English
Use International English names instead of local variants.
- ✅ `color`
- ❌ `colour`

### 3. Describe What, Not How (Object-Based Naming)
Name icons based on what they depict, not their use case or representation.
- ✅ `floppy-disk`, `magnifying-glass`
- ❌ `save`, `search`

### 4. Group Naming Pattern
Icons that are part of a group follow the pattern: `<group>-<variant>`
- Example: `badge-plus` (based on `badge`)

### 5. Avoid Generic Variants
Name alternate icons based on what makes them unique, not by numbering them.
- ✅ `send-horizontal`
- ❌ `send-2`

### 6. Numbers Only When Depicted
Names containing numerals are only allowed if the number itself is represented in the icon.
- ✅ `arrow-down-0-to-1` (contains numerals shown in icon)
- ❌ `arrow-2` (no numerals in icon)

### 7. Modifiers as Suffixes
When adding modifiers to a base icon, append the modifier to the end.
- ✅ `circle-dashed`, `calendar-check`, `microphone-slash`
- ❌ `dashed-circle`

### 8. Multiple Elements - Size Order
When depicting multiple elements of different sizes, list them in decreasing order of size.
- If circle is bigger: `circle-person`
- If person is bigger: `person-circle`

### 9. Multiple Elements - Equal Size
When depicting multiple elements of roughly equal sizes, list them:
- **Front to back**: if one element is in front of the other
- **English reading order**: top to bottom, left to right
- Example: `pencil-ruler` (if pencil is in front or above/left of ruler)

### 10. Shape Name Before Modifier
When icons are inset within a larger shape, name the primary shape first.
- ✅ `circle-check`, `triangle-exclamation`
- ❌ `check-circle`

### 11. Face Icons
Emoji/smiley icons should be prefixed with "face-"
- ✅ `face-smile`, `face-disguise`, `face-clouds`

### 12. Avoid -Alt Modifier
Do not use `-alt` unless absolutely necessary. Instead, use descriptive names that highlight unique features.
- ✅ `bed-front`, `pen-clip`, `landmark-dome`
- ❌ `bed-alt`, `pen-alt`, `landmark-alt`

### 13. Implied Movement
Icons that imply movement can use more descriptive words beyond just object-based naming.
- ✅ `person-walking`, `truck-fast`, `rabbit-running`

### 14. Arrows Include Direction
Arrow icon names must always include their pointing direction.
- **Thin arrows**: `arrow-<direction>-<position>` - Example: `arrow-right-from-line`
- **Thick/triangular arrows**: `<direction>-<position>` - Example: `right-from-line` (no "arrow" prefix)

### 15. Playful Names with Aliases
Unique playful names are acceptable if the standard guessable convention exists as an alias.
- ✅ `cowbell-more` (if `cowbell-circle-plus` also exists)
- Example: `business-time` (alias: `briefcase-clock`)

## Summary

**The golden rule**: Name icons based on **what they are**, not **what they do**. Make names consistent, guessable, and use-case agnostic so users can intuitively find and understand what each icon represents.