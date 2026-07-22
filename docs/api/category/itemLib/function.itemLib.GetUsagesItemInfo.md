# itemLib.GetUsagesItemInfo
Возвращает информацию об использовании предмета.

## Описание

```lua
itemLib.GetUsagesItemInfo( itemId: ObjectId ): table
```

Функция извлекает и возвращает массив таблиц, содержащих детальную информацию о возможных способах использования указанного предмета.

## Список параметров

- **`itemId`** (`ObjectId`) - Уникальный идентификатор предмета.

## Возвращаемые значения

Возвращает `table` - массив таблиц, каждый элемент которого содержит следующие поля:

- **`sysIndex`** (`number`) - Индекс (zero-based) конкретного использования.

- **`consumeItems`** (`number`) - Количество потребляемых предметов.

- **`usageDesc`** (`WString` | `nil`) - Локализованное описание использования.

- **`usageImage`** (`TextureId` | `nil`) - Иконка использования.

- **`givenAltCurrency`** (`CurrencyId` | `nil`) - Выдающаяся в этом использовании альтвалюта.

- **`givenItem`** (`ObjectId` | `nil`) - Выдающийся в этом использовании предмет.

- **`givenCount`** (`number` | `nil`) - Количество выдаваемых предметов или альтвалюты.

- **`givenUnlock`** (`UnlockId` | `nil`) - Выдающийся в этом использовании анлок.

- **`maxStack`** (`number` | `nil`) - Максимальный размер стека, если предмет может использоваться стеком (0 означает отсутствие ограничений).

## Примеры

### Получение информации об использовании предмета

```lua
local itemUsagesItemInfo = itemLib.GetUsagesItemInfo( itemId )
-- sysIndex конкретного [i-того] выбранного пользователем Usage-a потом необходимо передавать параметром в использование:
avatar.UseItemAndTakeActions( itemId, 1, itemUsagesItemInfo[ i ].sysIndex )
```

::: info Описание примера
В примере извлекается информация об использовании предмета. Затем индекс конкретного использования (`sysIndex`) передается в функцию `avatar.UseItemAndTakeActions` для выполнения действия.
:::

## Смотрите также

- [avatar.UseItemAndTakeActions](../avatar/function.avatar.UseItemAndTakeActions)