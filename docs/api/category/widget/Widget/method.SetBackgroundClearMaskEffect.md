# WidgetSafe:SetBackgroundClearMaskEffect

Задает специальный эффект для фонового слоя виджета.

## Описание

```lua
WidgetSafe:SetBackgroundClearMaskEffect( primaryColor: Color, secondaryColor: Color )
```

Фоновый слой должен присутствовать. Передаются два цвета: основной и дополнительный. Описание цвета представлено в типе `Color`.

::: warning Замечание
Специальный эффект используется для текстуры подложки гильдийский плащей.
:::

## Список параметров

- **`primaryColor`** (`Color`) - Основной цвет.

- **`secondaryColor`** (`Color`) - Дополнительный цвет.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка эффекта фонового слоя

```lua
wtElement:SetBackgroundClearMaskEffect(
    { r = 1.0; g = 0.0; b = 0.0; a = 1.0 },
    { r = 1.0; g = 0.0; b = 0.0; a = 1.0 }
)
```

## Смотрите также

- [Color](/api/types/LuaApi.md)