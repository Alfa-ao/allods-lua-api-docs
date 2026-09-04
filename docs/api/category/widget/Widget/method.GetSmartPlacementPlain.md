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
--[[ 
table(WidgetPlacementLua) {
    ["alignX"] => number(WIDGET_ALIGN_BOTH(3))
    ["alignY"] => number(WIDGET_ALIGN_BOTH(3))
    ["highPosX"] => number(0)
    ["highPosY"] => number(0)
    ["posX"] => number(0)
    ["posY"] => number(0)
    ["sizeX"] => number(1970.3532714844)
    ["sizeY"] => number(1080)
    ["sizingX"] => number(WIDGET_SIZING_DEFAULT(0))
    ["sizingY"] => number(WIDGET_SIZING_DEFAULT(0))
}
 ]]
```