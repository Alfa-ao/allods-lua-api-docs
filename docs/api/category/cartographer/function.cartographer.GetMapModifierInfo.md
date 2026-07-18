# cartographer.GetMapModifierInfo
Возвращает интерфейсные данные модификатора карты.

## Описание
```lua
cartographer.GetMapModifierInfo( mapModifierId: MapModifierId ): table | nil
```
Функция извлекает и возвращает таблицу с интерфейсными данными модификатора карты. Система предоставляет данные в двух состояниях: `UIState` (расширенная информация, включающая графические ресурсы) и `GameState` (базовая игровая информация).

## Список параметров
- **`mapModifierId`** (`MapModifierId`)
Идентификатор ресурса модификатора карты.

## Возвращаемые значения
Возвращает `table` или `nil`.

Если модификатор найден, возвращается таблица со следующими полями:
- **`name`** (`WString`)
Имя модификатора.
- **`description`** (`WString`)
Описание модификатора.
- **`difficult`** (`number`)
Сложность модификатора.
- **`finishTime`** (`number` | `nil`)
Дата окончания действия модификатора в формате timestamp, если время окончания задано.
- **`image`** (`TextureId`)
Идентификатор текстуры иконки модификатора. Поле доступно только при запросе расширенной информации (`UIState`).

Возвращает `nil`, если модификатор не найден или передан некорректный идентификатор.

## Примеры
### Получение и применение иконки модификатора
```lua
local mapModifiers = cartographer.GetCurrentMapModifiers()
local modifierInfo = mapModifiers[0] and cartographer.GetMapModifierInfo( mapModifiers[0] )
if modifierInfo then
    wtMapModifier:SetBackgroundTexture( modifierInfo.image )
end
```
::: info Описание примера
В примере извлекается список текущих модификаторов карты. Если список не пуст, запрашивается информация о первом модификаторе. При успешном получении данных идентификатор текстуры иконки (`image`) применяется в качестве фонового изображения для виджета `wtMapModifier`.
:::

## Смотрите также
- [MapModifierId](MapModifierId)
- [cartographer.GetCurrentMapModifiers](cartographer.GetCurrentMapModifiers)
- [EVENT_UNIT_DAMAGE_RECEIVED](events#event-unit-damage-received)