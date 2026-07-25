# WidgetSafe:SetPlacementPlain

Задает новое расположение виджета.

## Описание

```lua
WidgetSafe:SetPlacementPlain( placement: table )
```

Задание нового расположения виджета путем передачи полной или неполной таблицы WidgetPlacement.

## Список параметров

- **`placement`** (`table`) - таблица, описывающая новое положение виджета.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка частичного расположения

```lua
wtActionButton:SetPlacementPlain( { posY = 93 } )
```