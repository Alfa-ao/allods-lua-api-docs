# common.CreateValuedText
Создает и возвращает новый экземпляр `ValuedText`.

## Описание

```lua
common.CreateValuedText( textValues: table | nil ): ValuedText
```

Функция инициализирует новый объект `ValuedText` и возвращает ссылку на него. Если передана таблица `textValues`, она используется для первоначального заполнения текстовых значений через метод `SetTextValues`.

::: warning Замечание
Поскольку `ValuedText` является `userdata`, Lua работает с ним по ссылке, а не по значению. Изменение объекта в одной части кода повлияет на все переменные, ссылающиеся на этот же экземпляр.
:::

## Список параметров

- **`textValues`** (`table` | `nil`) - Таблица со значениями для заполнения. Если параметр задан, его содержимое будет использовано для заполнения нового `ValuedText` через `SetTextValues`. Если передан `nil` или параметр отсутствует, создается пустой экземпляр.

## Возвращаемые значения

Возвращает `ValuedText` - новый экземпляр `ValuedText`.

## Примеры

### Создание пустого экземпляра

```lua
local valuedText = common.CreateValuedText()
```

### Создание с заданым локализованным шаблоном

```lua
-- format = <html>Возможно, есть рецепты: <r name="count"/> шт.</html>

local vtCountRecipes = common.CreateValuedText{
    format = self._services.locale:Get( "EXAMPLE_TEXT" ),
    count = 5,
}
```

## Смотрите также

- [ValuedText](/api/category/ValuedText/index.md)