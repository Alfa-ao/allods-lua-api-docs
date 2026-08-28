# WidgetSafe:GetPlacementPlain

Возвращает полную таблицу WidgetPlacement.

## Описание

```lua
WidgetSafe:GetPlacementPlain(): table
```

Функция возвращает полную таблицу [WidgetPlacement](/api/types/WidgetPlacementLua.md), описывающую положение виджета. Неявные параметры могут иметь произвольное значение (поведение не определено).

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - таблица, описывающая положение виджета.

## Примеры

### Получение таблицы положения виджета

```lua
local placement = wtActionButton:GetPlacementPlain()
```