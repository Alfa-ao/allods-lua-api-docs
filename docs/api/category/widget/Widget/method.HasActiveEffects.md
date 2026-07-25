# WidgetSafe:HasActiveEffects

Проверяет наличие активного эффекта у виджета.

## Описание

```lua
WidgetSafe:HasActiveEffects( effectType: number | nil )
```

Функция выполняет проверку наличия активного эффекта у виджета.

## Список параметров

- **`effectType`** (`number`(`ET_*`) | `nil`) - Тип эффекта, или `nil`, если тип эффекта не имеет значения.

## Возвращаемые значения

Возвращает `boolean` - `true`, если у виджета имеется активный эффект, иначе `false`.

## Примеры

### Проверка наличия любого активного эффекта

```lua
local hasWidgetAnyActiveEffect = wt:HasActiveEffects()
```

## Смотрите также

- [ET_*](ссылка_1)