# craft.DiceCraftUseInspiration

Применяет накопленное вдохновение для текущего рецепта крафта.

## Описание

```lua
craft.DiceCraftUseInspiration()
```

Функция применяет вдохновение, накопленное для текущего рецепта, если оно достигло хотя бы первого уровня. Функция доступна только во время мини-игры крафтинга по механике dice craft. При неудаче приходит событие `EVENT_DICE_CRAFT_CMD_FAILED` с соответствующим значением cmdType.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Применение вдохновения

```lua
craft.DiceCraftUseInspiration()
```

## Смотрите также

- [EVENT_DICE_CRAFT_CMD_FAILED](events#event-dice-craft-cmd-failed)
- [craft.DiceCraftGetCurrentRecipe](function.craft.DiceCraftGetCurrentRecipe)
- [craft.DiceCraftGetRecipeInspiration](function.craft.DiceCraftGetRecipeInspiration)
- [craft.DiceCraftGetInspirationLevels](function.craft.DiceCraftGetInspirationLevels)