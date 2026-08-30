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

```
При WIDGET_ALIGN_BOTH / WIDGET_SIZING_INTERNAL / WIDGET_SIZING_CHILDREN
    sizeX / sizeY
При WIDGET_ALIGN_LOW / WIDGET_ALIGN_LOW_ABS / WIDGET_ALIGN_CENTER
    highPosX / highPosY
При WIDGET_ALIGN_HIGH
    posX / posY
```