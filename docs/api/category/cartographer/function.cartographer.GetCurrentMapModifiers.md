# cartographer.GetCurrentMapModifiers
Извлекает список идентификаторов модификаторов карты, на которой находится главный игрок.

## Описание
```lua
cartographer.GetCurrentMapModifiers(): table
```
Функция возвращает таблицу с идентификаторами модификаторов текущей карты. Данные формируются на основе состояния интерфейса (`UIState`) для получения расширенной информации и состояния игры (`GameState`) для базовой информации. Возвращаемая таблица индексируется с нуля.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` — индексированную с нуля таблицу, содержащую идентификаторы (`MapModifierId`) модификаторов карты.

## Примеры
### Получение и применение информации о модификаторе карты
```lua
local mapModifiers = cartographer.GetCurrentMapModifiers()
local modifierInfo = mapModifiers[0] and cartographer.GetMapModifierInfo( mapModifiers[0] )
if modifierInfo then
    wtMapModifier:SetBackgroundTexture( modifierInfo.image )
end
```
::: info Описание примера
В примере извлекается список модификаторов текущей карты. Если список не пуст, происходит получение подробной информации о первом модификаторе (с индексом `0`) с помощью `cartographer.GetMapModifierInfo`. При успешном получении данных фоновое изображение виджета `wtMapModifier` устанавливается в соответствии с изображением модификатора.
:::

## Смотрите также
- [cartographer.GetMapModifierInfo](cartographer.GetMapModifierInfo)
- `MapModifierId`