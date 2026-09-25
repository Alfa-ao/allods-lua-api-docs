---
description: Описание расположение виджета в скрипте - таблица с полями
---

# WidgetPlacementLua

Описание расположение виджета в скрипте - таблица с полями

```
sizingX  / sizingY:  number (enum) - тип масштабирования
alignX   / alignY:   number (enum) - тип выравнивания
sizeX    / sizeY:    number (float) - размер
posX     / posY:     number (float) - смещение относительно родителя (или ребенка при WIDGET_SIZING_CHILDREN) по левому / верхнему краю
highPosX / highPosY: number (float) - смещение относительно родителя (или ребенка при WIDGET_SIZING_CHILDREN) по правому / нижнему краю
```

Про типы масштабирования и выравнивания смотреть (HELP)

Валидность значений в геттерах / сеттерах. Если в описании API явно не указано иное, то при указанных условиях геттеры могут выдавать недействительные значения а сеттеры игнорировать поля

```lua
table(WidgetPlacementLua:10) {
    -- Тип выравнивания.
    -- Значения: number (WIDGET_ALIGN_LOW(0) | WIDGET_ALIGN_HIGH(1) | WIDGET_ALIGN_CENTER(2) | WIDGET_ALIGN_BOTH(3) | WIDGET_ALIGN_LOW_ABS(4))
    -- По умолчанию (alignX / alignY): number(WIDGET_ALIGN_LOW(0)) 
    ["alignX"] => number(WIDGET_ALIGN_LOW(0)) 
    ["alignY"] => number(WIDGET_ALIGN_LOW(0))
    
    -- Смещение относительно родителя (или ребенка при WIDGET_SIZING_CHILDREN) по ПРАВОМУ / НИЖНЕМУ краю.
    -- Значения: number (float)
    -- Смещение (highPosX / highPosY) действует только при значении (alignX / alignY): WIDGET_ALIGN_HIGH(1) или WIDGET_ALIGN_BOTH(3)
    -- По умолчанию (highPosX / highPosY): number(0)
    ["highPosX"] => number(0)
    ["highPosY"] => number(0)
    
    -- Смещение относительно родителя (или ребенка при WIDGET_SIZING_CHILDREN) по ЛЕВОМУ / ВЕРХНЕМУ краю.
    -- Значения: number (float)
    -- Игнорируется при выравнивании (alignX / alignY): WIDGET_ALIGN_HIGH(1)
    -- По умолчанию (posX / posY): number(0)
    ["posX"] => number(0)
    ["posY"] => number(0)
    
    -- Размер ширины и высоты виджета.
    -- Значения: number (float)
    -- Игнорируется при выравнивании (alignX / alignY): WIDGET_ALIGN_BOTH(3)
    -- Игнорируется при масштабировании (sizingX / sizingY): WIDGET_SIZING_INTERNAL(1) или WIDGET_SIZING_CHILDREN(2)
    -- По умолчанию (sizeX / sizeY): number(0)
    ["sizeX"] => number(0)
    ["sizeY"] => number(0)
    
    -- Тип масштабирования.
    -- Значения: number (WIDGET_SIZING_DEFAULT(0) | WIDGET_SIZING_INTERNAL(1) | WIDGET_SIZING_CHILDREN(2))
    -- По умолчанию (sizingX / sizingY): number (WIDGET_SIZING_DEFAULT(0))
    ["sizingX"] => number(WIDGET_SIZING_DEFAULT(0))
    ["sizingY"] => number(WIDGET_SIZING_DEFAULT(0))
}
```