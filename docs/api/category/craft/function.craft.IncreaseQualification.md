# craft.IncreaseQualification

Применяет просветление для открытия следующего рецепта.

## Описание

```lua
craft.IncreaseQualification()
```

Функция применяет просветление для открытия следующего рецепта. При неудаче приходит событие `EVENT_DICE_CRAFT_CMD_FAILED` с соответствующим значением `cmdType`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Применение просветления

```lua
craft.IncreaseQualification()
```

## Смотрите также

- [EVENT_DICE_CRAFT_CMD_FAILED](events.dice_craft#event-dice-craft-cmd-failed)