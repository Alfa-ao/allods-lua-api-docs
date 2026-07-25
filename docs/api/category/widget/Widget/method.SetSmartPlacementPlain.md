# WidgetSafe:SetSmartPlacementPlain

Задает новое расположение виджета.

## Описание

```lua
WidgetSafe:SetSmartPlacementPlain( placement: table ): table
```

В качестве аргумента принимает полную или неполную таблицу `WidgetPlacement`. Возвращает полную таблицу `WidgetPlacement` с действительными значениями всех полей (неявные параметры будут вычислены).

## Список параметров

- **`placement`** (`table`) - Таблица, описывающая новое положение виджета.

## Возвращаемые значения

Возвращает `table` - Таблица, описывающая новое положение виджета.

## Примеры

### Установка позиции виджета

```lua
wtActionButton:SetSmartPlacementPlain( { posX = 50 } )
```