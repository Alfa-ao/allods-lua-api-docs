# itemLib.GetActivationInfo

Возвращает информацию об активации созданных предметов.

## Описание

```lua
itemLib.GetActivationInfo( itemId: ObjectId ): table | nil
```

Функция возвращает таблицу с информацией об активации указанного созданного предмета или `nil` в случае возникновения ошибки.

## Список параметров

- **`itemId`** (`ObjectId`)

  Идентификатор предмета.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с информацией об активации предмета или `nil` при возникновении ошибки.

- **`isInactive`** (`boolean`)

  Предмет неактивирован и требует активации.

- **`cost`** (`number` | `nil`)

  Стоимость активации предмета. Значение `nil` возвращается, если предмет не требует активации или активация бесплатна.

- **`isItemActivator`** (`boolean`)

  Предмет является инструментом для активации других предметов.

## Примеры

### Активация предмета с использованием инструмента

```lua
local info = itemLib.GetActivationInfo( instrumentId )
if info and info.isItemActivator then
    avatar.ActivateItem( itemId, instrumentId )
end
```

::: info Описание примера
В примере запрашивается информация о предмете-инструменте. Если функция возвращает таблицу и поле `isItemActivator` равно `true`, вызывается функция `avatar.ActivateItem` для активации целевого предмета.
:::

## Смотрите также

- [avatar.ActivateItem](function.avatar.ActivateItem)
- [avatar.ActivateItemAlternative](function.avatar.ActivateItemAlternative)