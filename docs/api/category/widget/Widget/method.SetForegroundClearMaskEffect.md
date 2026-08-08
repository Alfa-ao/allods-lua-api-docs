# WidgetSafe:SetForegroundClearMaskEffect

Задает специальный эффект для переднего слоя виджета.

## Описание

```lua
WidgetSafe:SetForegroundClearMaskEffect( primaryColor: Color, secondaryColor: Color )
```

Сам передний слой должен быть в наличии. Передаются два цвета, основной и дополнительный. Описание цвета смотреть: [Color](/api/types/LuaApi.md).

::: warning Замечание
Специальный эффект используется для текстуры подложки гильдийский плащей.
:::

## Список параметров

- **`primaryColor`** (`Color`) - Основной цвет.

- **`secondaryColor`** (`Color`) - Дополнительный цвет.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Базовый вызов

```lua
wtElement:SetForegroundClearMaskEffect(
    { r = 1.0; g = 0.0; b = 0.0; a = 1.0 },
    { r = 1.0; g = 0.0; b = 0.0; a = 1.0 }
)
```