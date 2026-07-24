# TextViewSafe:SetVal

Задает значение для тега.

## Описание

```lua
TextViewSafe:SetVal( tag: string | WString, value: string | WString | ValuedText | ValuedObject )
```

Функция устанавливает указанное значение для заданного текстового тега. Часто используется в паре с функцией `GetDefaultTag`.

## Список параметров

- **`tag`** (`string` | `WString`) - Текстовый тег, для которого задается значение.

- **`value`** (`string` | `WString` | `ValuedText` | `ValuedObject`) - Устанавливаемое значение.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка значений для тегов

```lua
wtTextView:SetVal( "tag", userMods.ToWString( "tagValue" ) )
wtTextView:SetVal( "object", unit.GetPlayerValuedObject( playerName ) )
```

::: info Описание примера

В примере выполняется установка значений для двух различных тегов. Для первого тега используется функция `userMods.ToWString` для преобразования строки, а для второго применяется функция `unit.GetPlayerValuedObject` для получения объекта игрока.

:::

## Смотрите также

- [TextViewSafe:GetDefaultTag](method.GetDefaultTag)
- [unit.GetPlayerValuedObject](../../unit/function.unit.GetPlayerValuedObject)