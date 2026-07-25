# WidgetSafe:GetSmartPlacementPlain

Возвращает полную таблицу `WidgetPlacement` с действительными значениями всех полей, вычисляя неявные параметры.

## Описание

```lua
WidgetSafe:GetSmartPlacementPlain(): table
```

Функция возвращает полную таблицу `WidgetPlacement` с действительными значениями всех полей, вычисляя неявные параметры.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - таблицу, описывающую положение виджета (полная структура `WidgetPlacement`).

## Примеры

### Получение полного расположения виджета

```lua
local placement = wtActionButton:GetSmartPlacementPlain()
```