# itemLib.GetUsagesOnItemInfo

Возвращает информацию об использовании предмета на другой предмет.

## Описание

```lua
itemLib.GetUsagesOnItemInfo( itemId: ObjectId, targetItemId: ObjectId ): table
```

Функция возвращает массив таблиц с детальной информацией о возможных вариантах использования одного предмета на другой.

## Список параметров

- **`itemId`** (`ObjectId`) - Уникальный идентификатор предмета.

- **`targetItemId`** (`ObjectId`) - Уникальный идентификатор предмета-цели.

## Возвращаемые значения

Возвращает `table` - массив, каждый элемент которого представляет собой таблицу со следующими полями:

- **`sysIndex`** (`number`) - Индекс (zero-based) конкретного использования.

- **`consumeUsedItem`** (`number`) - Количество потребляемых используемых предметов.

- **`consumeTargetItem`** (`number`) - Количество потребляемых предметов-целей.

- **`usageDesc`** (`WString` | `nil`) - Локализованное описание использования.

- **`entryWarningUseText`** (`WString` | `nil`) - Локализованное предупреждение перед использованием.

- **`usageImage`** (`number` | `nil`) - Идентификатор иконки использования.

- **`givenAltCurrency`** (`number` | `nil`) - Идентификатор выдаваемой альтернативной валюты.

- **`givenItem`** (`number` | `nil`) - Идентификатор выдаваемого предмета.

- **`givenCount`** (`number` | `nil`) - Количество выдаваемых предметов или альтернативной валюты.

- **`givenUnlock`** (`number` | `nil`) - Идентификатор выдаваемого разблокируемого элемента.

## Примеры

### Получение информации об использовании и вызов действия

```lua
local itemUsagesOnItemInfo = itemLib.GetUsagesOnItemInfo( itemId, targetItemId )

-- sysIndex конкретного [i-того] выбранного пользователем Usage-a потом необходимо передавать параметром в использование:
avatar.UseItemOnItemAndTakeActions( targetItemId, itemId, 1, itemUsagesOnItemInfo[i].sysIndex )
```

::: info Описание примера
В примере сначала извлекается таблица с информацией об использовании предмета. Затем индекс конкретного варианта использования (`sysIndex`) передается в функцию `avatar.UseItemOnItemAndTakeActions` для выполнения действия над предметом-целью.
:::

## Смотрите также

- [avatar.UseItemOnItemAndTakeActions](../avatar/function.avatar.UseItemOnItemAndTakeActions)