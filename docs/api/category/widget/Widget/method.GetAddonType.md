# WidgetSafe:GetAddonType

Возвращает тип аддона, который создал виджет.

## Описание

```lua
WidgetSafe:GetAddonType(): number
```

Функция возвращает тип аддона, который создал виджет.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `number`(`ENUM_ADDON_TYPE_*`) - тип аддона, который создал виджет.

::: info Перечисление
- **`ENUM_ADDON_TYPE_NONE`** (`number`) - нет типа, тип не известен

- **`ENUM_ADDON_TYPE_USER`** (`number`) - пользовательский аддон

- **`ENUM_ADDON_TYPE_PROTECTED`** (`number`) - аддон разработчика (обычный интерфейсный аддон)
:::

## Примеры

### Проверка типа аддона

```lua
if wtElement:GetAddonType() == ENUM_ADDON_TYPE_USER then
    LogInfo( "Это виджет пользовательского аддона" )
end
```