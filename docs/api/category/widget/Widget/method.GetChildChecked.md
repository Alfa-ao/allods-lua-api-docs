# WidgetSafe:GetChildChecked

Возвращает существующий дочерний контрол по указанному имени.

## Описание

```lua
WidgetSafe:GetChildChecked( name: string, recursive: boolean|nil ): WidgetSafe
```

Функция выполняет поиск дочернего элемента управления по имени. 

::: danger
Если элемент не найден, происходит ошибка.

```
Widgets::GetChildWidget: Widget [1146][WidgetPanel]: (<Addon_Name>)->mainForm.wt..., Resource: [Serialized] hasn't child with name: <name>
```

:::

Поиск может осуществляться только среди непосредственных потомков или рекурсивно по всей иерархии вложенности. Имя контрола обязано быть непустым.

## Список параметров

- **`name`** (`string`) - Название искомого виджета.

::: danger <Badge type="danger" text="^18.0.0 - (Deprecated)" /> 
- **`recursive`** (`boolean` | `nil`) - Флаг, определяющий необходимость рекурсивного поиска среди вложенных контролов. По умолчанию `false`.
:::

## Возвращаемые значения

Возвращает `WidgetSafe` - Найденный дочерний контрол.

## Примеры

### Получение дочернего контрола

```lua
local child = parent:GetChildChecked( "MyName", false )
```