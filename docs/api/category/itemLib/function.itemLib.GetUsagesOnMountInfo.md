# itemLib.GetUsagesOnMountInfo

Возвращает информацию об использовании предмета на маунте.

## Описание

```lua
itemLib.GetUsagesOnMountInfo( itemId: ObjectId, mountId: ObjectId ): table
```

Функция извлекает и возвращает массив данных, описывающих варианты использования указанного предмета на заданном маунте.

## Список параметров

- **`itemId`** (`ObjectId`) - Уникальный идентификатор предмета.

- **`mountId`** (`ObjectId`) - Уникальный идентификатор маунта.

## Возвращаемые значения

Возвращает `table` - массив, каждый элемент которого таблица с полями:

- **`sysIndex`** (`number`) - Индекс (zero-based) конкретного использования.

- **`sysName`** (`string` | `nil`) - Служебное название действия.

- **`warningUseText`** (`WString` | `nil`) - Предупреждение об использовании.

- **`consumeUsedItem`** (`number`) - Количество потребляемых используемых предметов.

## Примеры

### Получение информации и использование предмета на маунте

```lua
local itemUsagesOnMountInfo = itemLib.GetUsagesOnMountInfo( itemId, mountId )
-- sysIndex конкретного [i-того] выбранного пользователем Usage-a потом необходимо передавать параметром в использование:
avatar.UseItemOnMountAndTakeActions( mountId, itemId, 1, itemUsagesOnMountInfo[ i ].sysIndex )
```

::: info Описание примера
В примере сначала запрашивается информация об использовании предмета на маунте. Затем индекс конкретного варианта использования передается в функцию `avatar.UseItemOnMountAndTakeActions` для выполнения действия.
:::

## Смотрите также

- [avatar.UseItemOnMountAndTakeActions](../avatar/function.avatar.UseItemOnMountAndTakeActions)